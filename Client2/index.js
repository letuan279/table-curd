// Get the table element from the DOM
const table = document.querySelector('table');

// Get all orders from the backend
fetch('http://localhost:5000/api/orders')
    .then(res => res.json())
    .then(data => {
        // Clear the table body
        table.querySelector('tbody').innerHTML = '';

        // Iterate through the orders and add them to the table
        data.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${order.id}</td>
                <td>
                    <img src="${order.customer_image}" alt=""> ${order.customer}
                </td>
                <td>${order.location}</td>
                <td>${order.order_date}</td>
                <td>
                    <p class="status ${order.status}">${order.status}</p>
                </td>
                <td><strong>$${order.amount}</strong></td>
                <td>
                    <div class="delete_btn"></div>
                </td>
            `;
            table.querySelector('tbody').appendChild(row);
        });

        setupDeleteBtn()

    })
    .catch(err => {
        console.error(err);
    });

function setupDeleteBtn() {
    // Get all delete buttons
    const deleteButtons = document.querySelectorAll('.delete_btn');

    // Add an event listener to each button
    deleteButtons.forEach(button => {
        button.addEventListener('click', event => {
            // Get the order id from the parent table row
            const orderId = event.target.parentElement.parentElement.firstElementChild.textContent;

            // Send a DELETE request to the API
            fetch(`http://localhost:5000/api/orders/${orderId}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // Update the table
                    updateTable();
                })
                .catch(err => {
                    console.error(err);
                });
        });
    });
}

// Function to update the table
function updateTable() {
    // Send a GET request to the API to fetch the updated orders
    fetch('http://localhost:5000/api/orders')
        .then(res => res.json())
        .then(data => {
            // Clear the table body
            table.querySelector('tbody').innerHTML = '';

            // Iterate through the orders and add them to the table
            data.forEach(order => {
                const row = document.createElement('tr');
                row.innerHTML = `
            <td>${order.id}</td>
            <td>
                <img src="${order.customer_image}" alt=""> ${order.customer}
            </td>
            <td>${order.location}</td>
            <td>${order.order_date}</td>
            <td>
                <p class="status ${order.status}">${order.status}</p>
            </td>
            <td><strong>$${order.amount}</strong></td>
            <td>
                <div class="delete_btn"></div>
            </td>
        `;
                table.querySelector('tbody').appendChild(row);
            });

            setupDeleteBtn()
        })
        .catch(err => {
            console.error(err);
        });
}






