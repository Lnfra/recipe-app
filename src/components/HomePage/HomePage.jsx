import React, { Component } from 'react'
import { cloneDeep } from 'lodash'
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated'
import { getRecipes, filterRecipes } from '../../services/recipeService'
import { getIngredients, ingredientsAddLabelValueProperty } from '../../services/ingredientService'
import Recipe from '../Recipe/Recipe'


export class HomePage extends Component {
    state = {
        selectedIngredients: null,
        recipes: [],
        ingredients: [],
        filteredRecipes: [],
        minimumMatchPercentage:1
    }

    componentDidMount() {
        this.setState({
            recipes: getRecipes(),
            ingredients: ingredientsAddLabelValueProperty(getIngredients())
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {selectedIngredients, recipes, minimumMatchPercentage } = this.state
        if (selectedIngredients !== prevState.selectedIngredients) {
            const selectedIngredientsNameArray = selectedIngredients.map(ingredient => ingredient.name)
            const copyStateRecipes = cloneDeep(recipes)
            const filteredRecipes = filterRecipes(selectedIngredientsNameArray, copyStateRecipes, minimumMatchPercentage)         
            this.setState({ filteredRecipes: filteredRecipes })
        }
    }

    handleChange = (selectedIngredients) => {
        this.setState({ selectedIngredients: selectedIngredients })
    }

    render() {
        const { selectedIngredients, filteredRecipes } = this.state;    
        const recipe=filteredRecipes.map(item=><Recipe key={item.id} recipe={item}/>)
        return (
            <React.Fragment>
            <Select
                value={selectedIngredients}
                onChange={this.handleChange}
                options={this.state.ingredients}
                isMulti
                isClearable
                components={makeAnimated()}
                className="mt-5"
            />
            <div className="row">   
            {recipe}
            </div>
            </React.Fragment>
        );
    }
}

export default HomePage
