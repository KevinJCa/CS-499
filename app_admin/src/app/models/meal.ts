/* Interface to define the data for a single type of meal that will be received
from the API endpoint as a JSON object. Instances of this interface will
be used to transfer HTML form data to the component for rendering as well as
between components and the REST endpoint. */
export interface Breakfast { 
    _id: string, // Internal primary key in MongoDB
    code: string, // Unique personalized idenitfier for the meal
    name: string,
    image: string,
    description: string,
    price: string
}
export interface Lunch { 
    _id: string, // Internal primary key in MongoDB
    code: string, // Unique personalized idenitfier for the meal
    name: string,
    image: string,
    description: string,
    price: string
}
export interface Dinner { 
    _id: string, // Internal primary key in MongoDB
    code: string, // Unique personalized idenitfier for the meal
    name: string,
    image: string,
    description: string,
    price: string
}