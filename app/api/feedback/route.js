import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request) {
  try {
    const body = await request.json();
    const { selectedText, feedback, anonymous, email } = body;

    // Input validation
    if (!selectedText || !feedback) {
      return NextResponse.json(
        { error: 'Selected text and feedback are required' },
        { status: 400 }
      );
    }

    if (!anonymous && !email) {
      return NextResponse.json({ error: 'Email is required when not anonymous' }, { status: 400 });
    }

    // Insert feedback into Supabase
    const { data, error } = await supabase
      .from('feedback')
      .insert([
        {
          selected_text: selectedText,
          feedback: feedback,
          is_anonymous: anonymous,
          email: email || null,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to submit feedback' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Feedback submitted successfully', data }, { status: 201 });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
