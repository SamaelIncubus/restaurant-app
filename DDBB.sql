-- RESTART DATABASE
DROP TABLE Cart;
DROP TYPE SIZING;
DROP TABLE Deliver;
DROP TABLE Offer;
DROP TABLE Client;
DROP TABLE Store;
DROP TABLE Product;
DROP TYPE CATEGORY;

-- DATABASE CREATION
CREATE TYPE CATEGORY AS ENUM ('drink', 'dessert', 'snack', 'meal');
CREATE TABLE  Product  (
   	id  SERIAL, 
		PRIMARY KEY ( id ),
   	name  TEXT NOT NULL,
   	allergens BOOL[] NOT NULL, /*1.Cereals containing gluten, 2.Crustaceans, 3.Eggs, 4.Fish, 5.Peanuts, 6.Soybeans,
	7.Milk, 8.Nuts, 9.Celery, 10.Mustard, 11.Sesame seeds, 12.Sulphur dioxide and sulphites, 13.Lupin, 14.Molluscs*/
	price DOUBLE PRECISION[] NOT NULL, -- One for each size
	information DOUBLE PRECISION[] NOT NULL, /*Nutritional Information: 1.Energy, 2.Fat, 3.of which saturates, 4.Carbohydrates,
	5.of which sugars, 6.Protein, 7.Salt*/
	photo TEXT NOT NULL,
	category CATEGORY NOT NULL,
	description TEXT NOT NULL
);

CREATE TABLE  Store  (
   	id  SERIAL, 
		PRIMARY KEY ( id ),
   	direction TEXT NOT NULL,
	phone INT NOT NULL,
	arrival TIME[] NOT NULL, -- One for each day of the week
	leaving TIME[] NOT NULL -- One for each day of the week
);

CREATE TABLE  Client  (
   	id  SERIAL, 
		PRIMARY KEY ( id ),
	email TEXT NOT NULL,
   	name  TEXT NOT NULL,
	password TEXT NOT NULL,
	photo TEXT NOT NULL DEFAULT 'assets/users/default.png',
   	direction TEXT NOT NULL,
	phone INT NOT NULL,
	admin BOOL NOT NULL DEFAULT 'FALSE'
);

CREATE TABLE  Offer  (
   	id  SERIAL, 
		PRIMARY KEY ( id ),
   	description TEXT NOT NULL,
	launch DATE NOT NULL,
	closing  DATE NOT NULL,
	discount DOUBLE PRECISION NOT NULL -- %
);

CREATE TABLE  Deliver  (
   	id  SERIAL, 
		PRIMARY KEY ( id ),
	price DOUBLE PRECISION NOT NULL,
	discount DOUBLE PRECISION NOT NULL DEFAULT 0,
	deliverman INT[] NOT NULL, -- Id of the Employee who deliver the pacage
	day DATE NOT NULL DEFAULT current_date,
	direction TEXT NOT NULL,
	client INT NOT NULL, -- Relation 1:N
		CONSTRAINT client FOREIGN KEY ( client ) REFERENCES  Client ( id ),
	store INT NOT NULL, -- Relation 1:N
		CONSTRAINT store FOREIGN KEY ( store ) REFERENCES  Store ( id ),
	offer INT, -- Relation 1:N
		CONSTRAINT offer FOREIGN KEY ( offer ) REFERENCES  Offer ( id )
);

CREATE TYPE SIZING AS ENUM ('small', 'normal', 'large');
CREATE TABLE Cart ( -- Relation N:N
	id SERIAL,
		PRIMARY KEY ( id ),
	sizing SIZING NOT NULL DEFAULT 'normal',
	extra TEXT,
	amount INT NOT NULL DEFAULT 1,
	deliver INT NOT NULL,
		CONSTRAINT deliver FOREIGN KEY ( deliver ) REFERENCES Deliver ( id ),
	product INT NOT NULL,
		CONSTRAINT product FOREIGN KEY ( product ) REFERENCES Product ( id )
);

-- DATA INSERTION EXAMPLE
INSERT INTO Product (name, allergens, price, information, photo, category, description)
	VALUES ('Coca Cola', '{FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, FALSE}',
		   	'{2, 2.5, 3}', '{5840, 16.7, 15.4, 12.2, 2.9, 3.4, 7.1}',  'assets/products/cocaCola.png', 'drink',
			'250ml bottle of CocaCola');
INSERT INTO Product (name, allergens, price, information, photo, category, description)
	VALUES ('French Fries', '{TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE}',
		   	'{1, 1.4, 1.9}', '{1290, 5.7, 7.6, 15, 1, 2.4, 5.4}',  'assets/products/frenchFries.png', 'snack',
			'100g salted french fries');
INSERT INTO Product (name, allergens, price, information, photo, category, description)
	VALUES ('Cheese Burger', '{TRUE, FALSE, TRUE, FALSE, FALSE, FALSE, TRUE, FALSE, FALSE, FALSE, TRUE, FALSE, FALSE, FALSE}',
		   	'{2.5, 3, 4}', '{3680, 21.8, 20.3, 16.5, 2.4, 2.3, 10.2}',  'assets/products/cheeseBurger.png', 'meal',
			'100g meat covered with 10g cheese between two toasted bread');
INSERT INTO Product (name, allergens, price, information, photo, category, description)
	VALUES ('Ice Cream', '{TRUE, FALSE, TRUE, FALSE, FALSE, FALSE, TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE}',
		   	'{1, 1.65, 2}', '{2633, 12.4, 10, 9.9, 4.5, 6.2, 2.4}',  'assets/products/iceCream.png', 'dessert',
			'80g ice cream with natural yogurt base');
			
INSERT INTO Store (direction, phone, arrival, leaving)
	VALUES ('C/Juan XXIII nº12', 928413146, 
			'{NULL, 14:00:00, 14:00:00, 14:00:00, 08:00:00, 08:00:00, 08:00:00}', 
			'{NULL, 22:00:00, 22:00:00, 22:00:00, 03:00:00, 03:00:00, 03:00:00}');
INSERT INTO Store (direction, phone, arrival, leaving)
	VALUES ('Plaza Victoria nº3', 928642009, 
			'{01:00:00, 02:00:00, 03:00:00, 04:00:00, 05:00:00, NULL,  NULL}', 
			'{22:00:00, 22:00:00, 22:00:00, 03:00:00, 03:00:00, NULL,  NULL}');

INSERT INTO Client (email, name, password, photo,  direction, phone)
	VALUES ('Carlitos@gmail.com','Carlos' ,'carlitos', 'assets/users/carlos1.png', 'C/Tarragona nº3 B', 634540561);
INSERT INTO Client (email,name, password, photo,  direction, phone)
	VALUES ('TommysCafe@outlook.com','Cafe Tommy', 'FRS176srfhs43rgzr', 'assets/users/tommy2.png' ,'Comercial Center Las Arenas 41 A', 928560041);
INSERT INTO Client (email,name, password,  direction, phone, admin)
	VALUES ('a@a.aa','a', 'a','a', 928560041, true);
	
	
INSERT INTO Offer (description, launch, closing, discount)
	VALUES ($$Cheese's day$$, '05/11/19', '05/12/19', 10.5); -- Error of Assistant Needs a: ') to fixed
INSERT INTO Offer (description, launch, closing, discount)
	VALUES ('Big monthly delivery', '22/11/19', '22/11/19', 30);
INSERT INTO Offer (description, launch, closing, discount)
	VALUES ('Double Large', '23/06/18', '30/06/18', 10);
	
INSERT INTO Deliver (price, discount, deliverman, direction, client, store, offer)
	VALUES (13.15, 30,'{13}', 'C/Tarragona nº3 B' ,1, 1, 3);
INSERT INTO Deliver (price, discount, deliverman, day, direction, client, store, offer )
	VALUES (173.33, 10 ,'{10,11,12}','29/06/18' , 'Comercial Center Las Arenas 41 A' , 2, 1, 2);

INSERT INTO Cart (sizing, deliver, product)
	VALUES ('large', 1, 3);
INSERT INTO Cart (sizing, extra, deliver, product)
	VALUES (DEFAULT, 'without cheese', 1, 3);
INSERT INTO Cart (sizing, deliver, product)
	VALUES (DEFAULT, 1, 2);
INSERT INTO Cart (sizing, deliver, product)
	VALUES ('large', 1, 1);
INSERT INTO Cart (sizing, deliver, product)
	VALUES ('small', 1, 4);
INSERT INTO Cart (sizing, deliver, product)
	VALUES (DEFAULT, 1, 4);
INSERT INTO Cart (sizing, amount, deliver, product)
	VALUES (DEFAULT, 30, 2, 3);
INSERT INTO Cart (sizing, amount, deliver, product)
	VALUES ('small', 40, 2, 3);
INSERT INTO Cart (sizing, amount, deliver, product)
	VALUES ('large', 20, 2, 3);
	
-- DATA OBSERVATION
/*
SELECT id, sizing, extra, amount, 
	(SELECT name FROM Client WHERE id= (SELECT id FROM Deliver WHERE id=deliver))as client,
	(SELECT name FROM Product WHERE id= product) as product,
	(SELECT day FROM Deliver WHERE id= deliver)
FROM Cart;

SELECT id, price, discount, deliverman, day, direction,
	(SELECT name FROM Client WHERE id= client)as client,
	(SELECT direction FROM Store WHERE id= store)as "store",
	(SELECT description FROM Offer WHERE id=offer)as "offer" 
FROM Deliver;

SELECT *FROM Offer;

SELECT * FROM Client;

SELECT * FROM Store;

SELECT * FROM Product;
*/