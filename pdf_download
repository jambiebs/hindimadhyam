  document.getElementById('HindiMadhyam-pdf').addEventListener('click', function () {
        const divContents = document.getElementById('HindiMadhyam_Pdf').innerHTML;
        const printWindow = window.open('', '_blank');
        printWindow.document.open();
        printWindow.document.write('<html><head><title>HindiMadhyam.in PDF</title></head><body>' + divContents + '</body></html>');
        printWindow.document.close();
        printWindow.print();
    });
