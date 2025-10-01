/* Interface to define the data for a  meal that will be received
from the API endpoint as a JSON object. Instances of this interface will
be used to transfer HTML form data to the component for rendering as well as
between components and the REST endpoint. */
export interface Meal { 
    _id: string, // Internal primary key in MongoDB
    code: string, // Unique personalized idenitfier for the meal
    name: string,
    image: string,
    description: string,
    price: string,
}
