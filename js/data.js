
  // Fetch the CSV file
  fetch('MBF.csv')
    .then(response => response.text())
    .then(csvData => {
      // Parse the CSV data
      const rows = csvData.split('\n');
      const headers = rows[0].split(',');
      const data = [];

      // Extract data from CSV rows
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i].split(',');
        const rowData = {};

        for (let j = 0; j < headers.length; j++) {
          rowData[headers[j]] = row[j];
        }

        data.push(rowData);
      }

      // Use the extracted data
      console.log(data);
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
