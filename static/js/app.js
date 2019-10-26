var table = data;

// Get table body
var tbody = d3.select("tbody");

function createTable(data) {
  // Remove existing data
  tbody.html("");

  // Loop through objects in dataset
  data.forEach((tableRow) => {
    // Append row
    var row = tbody.append("tr");

    // Loop through and add data to each field
    Object.values(tableRow).forEach((value) => {
      var cell = row.append("td");
        cell.text(value);
      }
    );
  });
}

function clickListener() {

  // Retrieve date input
  var date = d3.select("#datetime").property("value");
  let filtered = table;

  // If input entered, then only show dates that equal to filtered data
  if (date) {
    // Apply filter to the table data
    filtered = filtered.filter(row => row.datetime === date);
  }

  
  createTable(filtered);
}

// Attach an event listener to button
d3.selectAll("#filter-btn").on("click", clickListener);

// Build the table
createTable(table);