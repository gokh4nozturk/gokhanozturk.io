'use client'

import { useRef } from 'react'
import { MDXProvider } from '@mdx-js/react'
import ResumeContent from './content.mdx'
import components from '../components/mdx-components'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'

export default function ResumePage() {
  const contentRef = useRef(null)

  const handleDownload = async () => {
    if (!contentRef.current) return

    try {
      // PDF için özel stiller uygula
      const element = contentRef.current
      element.style.color = '#000000'
      element.style.backgroundColor = '#ffffff'
      element.style.width = '210mm' // A4 genişliği
      element.style.padding = '20mm'
      element.style.boxSizing = 'border-box'
      
      // Tüm metin elementlerinin rengini siyah yap
      const textElements = element.querySelectorAll('h1, h2, h3, p, li, strong, em')
      textElements.forEach(el => {
        el.style.color = '#000000'
        if (el.tagName === 'H1') {
          el.style.fontSize = '28px'
          el.style.marginBottom = '16px'
        }
        if (el.tagName === 'H2') {
          el.style.fontSize = '22px'
          el.style.borderBottom = '1px solid #e5e7eb'
          el.style.paddingBottom = '8px'
          el.style.marginTop = '24px'
        }
        if (el.tagName === 'H3') {
          el.style.fontSize = '18px'
          el.style.marginTop = '20px'
        }
        if (el.tagName === 'P') {
          el.style.fontSize = '14px'
          el.style.lineHeight = '1.6'
          el.style.marginBottom = '12px'
        }
        if (el.tagName === 'LI') {
          el.style.fontSize = '14px'
          el.style.lineHeight = '1.6'
          el.style.marginBottom = '4px'
        }
      })

      // Linkleri mavi yap
      const links = element.querySelectorAll('a')
      links.forEach(link => {
        link.style.color = '#2563eb'
        link.style.textDecoration = 'none'
        link.style.fontSize = '14px'
      })

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: 794, // A4 genişliği (px cinsinden)
        onclone: (clonedDoc) => {
          Array.from(clonedDoc.fonts).forEach(font => {
            document.fonts.add(font)
          })
        }
      })

      // Stilleri geri yükle
      element.style.removeProperty('color')
      element.style.removeProperty('background-color')
      element.style.removeProperty('width')
      element.style.removeProperty('padding')
      element.style.removeProperty('box-sizing')
      
      textElements.forEach(el => {
        el.style.removeProperty('color')
        el.style.removeProperty('font-size')
        el.style.removeProperty('margin-bottom')
        el.style.removeProperty('margin-top')
        el.style.removeProperty('padding-bottom')
        el.style.removeProperty('line-height')
        if (el.tagName === 'H2') {
          el.style.removeProperty('border-bottom')
        }
      })
      
      links.forEach(link => {
        link.style.removeProperty('color')
        link.style.removeProperty('text-decoration')
        link.style.removeProperty('font-size')
      })

      const imgData = canvas.toDataURL('image/png', 1.0)
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true,
        hotfixes: ['px_scaling']
      })

      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, '', 'FAST')
      pdf.save('Gökhan Öztürk - Resume.pdf')
    } catch (error) {
      console.error('PDF oluşturulurken bir hata oluştu:', error)
    }
  }

  return (
    <>
      <div className="print:hidden">
        <button
          onClick={handleDownload}
          className="fixed bottom-8 right-8 bg-blue-500/80 hover:bg-blue-500 text-white p-2.5 rounded-full shadow-lg backdrop-blur-sm transition-all hover:shadow-blue-500/25 flex items-center gap-2"
          aria-label="download resume as pdf"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className="relative max-w-2xl mx-auto">
        <MDXProvider components={components}>
          <article ref={contentRef} className="prose prose-gray dark:prose-invert max-w-none">
            <ResumeContent />
          </article>
        </MDXProvider>
      </div>
    </>
  )
} 