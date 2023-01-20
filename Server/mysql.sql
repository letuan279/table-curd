CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer VARCHAR(255) NOT NULL,
    customer_image VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    order_date DATE NOT NULL,
    status VARCHAR(255) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL
);

INSERT INTO orders (customer, customer_image, location, order_date, status, amount)
VALUES
    ("Zinzu Chan Lee", "images/Zinzu Chan Lee.jpg", "Seoul", "2022-12-17", "Delivered", 128.90),
    ("Jeet Saru", "images/Jeet Saru.jpg", "Kathmandu", "2023-08-27", "Cancelled", 5350.50),
    ("Sonal Gharti", "images/Sonal Gharti.jpg", "Tokyo", "2023-03-14", "Shipped", 210.40);
