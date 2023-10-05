// *************** PARTIAL TYPE *******************

// Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.

interface Todo {
    title: string;
    description: string;
}
   
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
    title: "organize desk",
    description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
    description: "throw out trash",
});

// =============================================

// *************** REQUIRED TYPE *******************

// Constructs a type consisting of all properties of Type set to required. 
// The opposite of Partial.

interface Props {
    a?: number;
    b?: string;
}
   
const obj: Props = { a: 5 };

// const obj2: Required<Props> = { a: 5 };  --> error

// Property 'b' is missing in type '{ a: number; }', but it is required in type 'Required<Props>'.

// =============================================

