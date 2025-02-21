export default function getBy(extent) {
    let futureDate = new Date(); // Create a new Date instance
    futureDate.setDate(futureDate.getDate() + extent); // Add 7 days safely

    let day = String(futureDate.getDate()).padStart(2, '0'); // Ensure 2-digit day
    let month = futureDate.toLocaleString('en-US', { month: 'short' }); // Short month name
    let year = futureDate.getFullYear(); // Get full year

    return `${day} - ${month} - ${year}`;
}