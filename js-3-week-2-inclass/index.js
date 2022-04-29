// console.log(`class-week-2`);

const pokemonResponse = {
    pokemonName: 'pikachu',
    id:27,
    // ignored list
    listOfEpisodes: [],
    alternateColors: [],
    favouriteFood: ''
};

const printPokemonResponseWithoutDestructuring = (pokemon) => {
    console.log(pokemon.id, pokemon.pokemonName);
};

const printPokemonResponseWithDestructuring = ({pokemonName, id}) => {
    console.log(id, pokemonName);
};

// DESTRUCTURING
const {pokemonName, id} = pokemonResponse;
// roughly equilvalent
// const pokemonName = pokemonResponse.pokemonName;
// const id = pokemonResponse['id'];

// These 3 functions do the same thing
// console.log(id, pokemonName);
// printPokemonResponseWithoutDestructuring(pokemonResponse);
// printPokemonResponseWithDestructuring(pokemonResponse);


function smallPrint(input='This is a DEFAULT value') {
    console.log(input);
}
// function smallPrint(input) {
//     if (input === undefined) {
//         input = 'This is a DEFAULT value';
//     }
//     console.log(input);
// }

smallPrint('This is a text'); // This is a text
smallPrint();  // This is a DEFAULT value
smallPrint('Another text'); // Another text
smallPrint(); // This is a DEFAULT value
smallPrint(''); // ''

// Destructuring Arrays
const listOfEpisodes = [0,1,2,3,4,5,6];
const [zero, first, ,third] = listOfEpisodes;
console.log(zero);
console.log(first);
console.log(third);
console.log();

// ...rest Operator
function printingWithRestOperator(...arrayOfParameters) {
    arrayOfParameters.forEach(parameter => {
        console.log(parameter);
    })
}
printingWithRestOperator(0,1,2,4,8);