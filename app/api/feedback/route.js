import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkRateLimit(email) {
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const { data, error, count } = await supabase
    .from('feedback')
    .select('*', { count: 'exact' })
    .eq('email', email)
    .gte('created_at', oneHourAgo);

  if (error) {
    console.error('Rate limit check error:', error);
    return false;
  }

  return count < 10;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { rating, feedback, isAnonymous: is_anonymous, email } = body;

    // Input validation
    if (!rating) {
      return NextResponse.json({ error: 'Rating is required' }, { status: 400 });
    }

    if (!is_anonymous && !email) {
      return NextResponse.json({ error: 'Email is required when not anonymous' }, { status: 400 });
    }

    // Check rate limit for non-anonymous feedback
    if (!is_anonymous) {
      const isWithinLimit = await checkRateLimit(email);
      if (!isWithinLimit) {
        return NextResponse.json(
          { error: 'Rate limit exceeded. Please try again later.' },
          { status: 429 },
        );
      }
    }

    // Insert feedback into Supabase
    const { data, error } = await supabase
      .from('feedback')
      .insert([
        {
          rating: rating,
          feedback: feedback,
          is_anonymous: is_anonymous,
          email: email || null,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('Detailed Supabase error:', error);
      return NextResponse.json(
        {
          error: 'Failed to submit feedback',
          details: error.message,
          code: error.code,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: 'Feedback submitted successfully', data }, { status: 201 });
  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error.message,
      },
      { status: 500 },
    );
  }
}
