# Todo List Application Assignment

## Objective
Build a fully functional Todo List application using **HTML, CSS, and JavaScript** that allows users to manage tasks efficiently using CRUD operations and filtering features.

---

# Features Required

## 1. Add Todo
Create a form that allows a user to:
- Enter a todo title
- Enter an optional description
- Submit/save the todo

### Validation
- Title is required
- Empty todos should not be saved

---

## 2. Fetch/Display Todos
Display all todos on the page.

Each todo item should show:
- Title
- Description
- Status (`Completed` or `Pending`)
- Date created (optional)

---

## 3. Update Todo
Allow the user to:
- Edit an existing todo
- Update title and description
- Save changes

---

## 4. Delete Todo
Allow the user to:
- Remove a todo permanently

Add:
- Delete button
- Confirmation before deletion

---

## 5. Mark as Completed / Unmark
Allow the user to:
- Mark a todo as completed
- Change it back to pending

### UI Suggestions
- Completed tasks can:
  - Have line-through text
  - Show green color
  - Display a completed badge

---

## 6. Filter Todos
Provide filtering options:
- All
- Completed
- Pending

When a filter is selected, only matching todos should appear.

---

## 7. Search Todos
Add a search input that allows users to:
- Search todos by title
- Search should work instantly while typing

---

## 8. Persist Data
Store todos using:
- `localStorage`

Data should remain even after refreshing the page.

---

# Extension Requirements (Mandatory)

Implement the following advanced features as part of the assignment:

## 9. Todo Statistics
Display:
- Total todos
- Completed todos
- Pending todos

Example:

```text
Total: 10
Completed: 4
Pending: 6
```

---

## 10. Group Todos by Status
Todos should be displayed in sections such as:

### Completed Tasks
- Task 1
- Task 2

### Pending Tasks
- Task 3
- Task 4

---

## 11. Responsive Design
Ensure the application works properly on:
- Mobile devices
- Tablets
- Desktop screens

---

# Technical Requirements

## Technologies
Use:
- HTML
- CSS
- Vanilla JavaScript

Do NOT use:
- Frameworks
- Libraries

---

# Suggested UI Layout

```text
------------------------------------------------
|                 TODO APP                     |
------------------------------------------------
| Search Todo                                  |
------------------------------------------------
| [ Title Input ]                              |
| [ Description Input ]                        |
| [ Add Todo Button ]                          |
------------------------------------------------
| Filters: [All] [Completed] [Pending]         |
------------------------------------------------
| Statistics                                   |
| Total: 10                                    |
| Completed: 4                                 |
| Pending: 6                                   |
------------------------------------------------
| Completed Tasks                              |
| Todo Card                                    |
| [Complete] [Edit] [Delete]                   |
------------------------------------------------
| Pending Tasks                                |
| Todo Card                                    |
| [Complete] [Edit] [Delete]                   |
------------------------------------------------
```

---

# Functional Expectations

## CRUD Operations

| Operation | Description |
|---|---|
| Create | Add new todo |
| Read | Display todos |
| Update | Edit existing todo |
| Delete | Remove todo |

---

# Bonus Features (Optional)

Students can attempt:
- Dark mode
- Due dates
- Drag and drop sorting
- Priority levels
- Toast notifications
- Clear completed button
- Animations

---

# Expected Learning Outcomes

By completing this assignment, students should understand:
- DOM manipulation
- Event handling
- Arrays and objects in JavaScript
- LocalStorage
- CRUD operations
- Filtering arrays
- Searching data
- Form validation
- Dynamic rendering
- Responsive web design

---

# Suggested Data Structure

```javascript
const todo = {
  id: 1,
  title: "Learn JavaScript",
  description: "Practice DOM manipulation",
  completed: false,
  createdAt: new Date()
};
```

---

# Submission Requirements

Students should submit:
1. `index.html`
2. `style.css`
3. `script.js`

---

# Evaluation Criteria

| Criteria | Marks |
|---|---|
| CRUD Functionality | 25 |
| Search & Filtering | 20 |
| LocalStorage Usage | 15 |
| Statistics & Grouping | 15 |
| Responsive Design | 10 |
| UI/UX Design | 10 |
| Code Structure & Readability | 5 |

---

# Final Challenge

Enhance the application further by adding:
- Task priorities
- Due dates
- Sorting functionality
- Export/import todos
- Theme switcher

