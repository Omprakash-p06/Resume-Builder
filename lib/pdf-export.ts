import { toPng } from 'html-to-image'
import { jsPDF } from 'jspdf'

export async function exportResumeAsPDF(elementId: string, fileName: string) {
  try {
    const element = document.getElementById(elementId)
    if (!element) {
      throw new Error('Resume element not found')
    }

    // Capture the element as a PNG image using html-to-image
    // This library handles modern CSS like oklch better than html2canvas
    // skipFonts: true prevents errors with web font embedding
    const dataUrl = await toPng(element, {
      quality: 0.95,
      backgroundColor: '#ffffff',
      skipFonts: true,
    })

    // Calculate image dimensions and PDF page size (A4)
    const img = new Image()
    img.src = dataUrl

    // Wait for image to load to get dimensions (although toPng returns a promise, we want to be safe)
    await new Promise((resolve) => { img.onload = resolve })

    const imgWidth = 210 // A4 width in mm
    const pageHeight = 297 // A4 height in mm
    const imgHeight = (img.height * imgWidth) / img.width
    let heightLeft = imgHeight
    let position = 0

    // Create PDF
    const pdf = new jsPDF('p', 'mm', 'a4')

    // Add first page
    pdf.addImage(dataUrl, 'PNG', 0, position, imgWidth, imgHeight)
    heightLeft -= pageHeight

    // Add additional pages if the content overflows one page
    while (heightLeft > 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(dataUrl, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight
    }

    // Save the PDF
    pdf.save(fileName)
    return true
  } catch (error) {
    console.error('Error exporting PDF:', error)
    throw error
  }
}
