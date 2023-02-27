//Type assertion basically means that you are telling typescript you 
// know exactly what you are doing better than it does.

const myVariable: unknown = "hello";


// you type assert using the 'as' keyword

const myString: string = myVariable as string