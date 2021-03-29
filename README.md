# Fullstack Pop Quiz

### Instructions
- Fork and clone this repo.
- Answer the written questions.
- Complete the React app.
- You have 75 minutes.

---

### Explain the Model-View-Controller design pattern for web applications.
The Model View Controller (MVC) design pattern specifies that an application consist of a data model, presentation information, and control information. The pattern requires that each of these be separated into different objects.

---

### In relational databases, what are the kinds of table relations? 
Give examples for each.
There are three types of relationships between the data you are likely to encounter at this stage in the design: one-to-one, one-to-many, and many-to-many. To be able to identify these relationships, you need to examine the data and have an understanding of what business rules apply to the data and tables.
A one-to-one (1:1) relationship means that each record in Table A relates to one, and only one, record in Table B, and each record in Table B relates to one, and only one, record in Table A.
A one-to-many (1:N) relationship means a record in Table A can relate to zero, one, or many records in Table B. Many records in Table B can relate to one record in Table A. The potential relationship is what's important; for a single record in Table A, there might be no related records in Table B, or there might be only one related record, but there could be many.
 Each object can involve more than one other object and each other object can be working on more than one object. This constitutes a many-to-many (N:N) relationship.


---
### In MongoDB, what is the difference between Embedded Documents and Document References? 
Give examples for each.
In general, embed is good if you have one-to-one or one-to-many relationships between entities, and reference is good if you have many-to-many relationships.

---

### In React, what is Lifting State Up? 
Give an example.
In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”.
---

### In React, what is Conditional Rendering?
Give an example.

Conditional rendering is a term to describe the ability to render different user interface (UI) markup if a condition is true or false. In React, it allows us to render different elements or components based on a condition. This concept is applied often in the following scenarios: Rendering external data from an API.

---

### Complete The React App

- This repo contains an almost-working frontend React todo app.
- In [src/components/Form.js](src/components/Form.js), complete the 4 tasks marked with `//TODO`.
- To check if you are complete, you can type
```bash
npm run test
```
- You will see there are 5 tests to pass, 1 will be passing to begin with
- To exit out of the tests type `q` or control C, all 5 Tests or the 1 Test Suite should be passing.
