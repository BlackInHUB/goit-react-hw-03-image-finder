import { Component } from "react";
import PropTypes from 'prop-types'
import { Form, FormBtn, FormInput } from "./SearchForm..styled";
import { BiSearch } from 'react-icons/bi'

export class SearchForm extends Component {
    state = {
        inputValue: '',
    }

    handleChange = (e) => {
        this.setState({inputValue: e.currentTarget.value.toLowerCase()})
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { inputValue } = this.state;
        const { onSubmit } = this.props;

        if (inputValue === '') {
            return alert('Введіть щось для пошуку!')
        }

        onSubmit(inputValue)

        this.setState({inputValue: ''})
    }

    render() {
        const { inputValue } = this.state;

        return (
        <Form onSubmit={this.handleSubmit}>
            <FormBtn type="submit"><BiSearch size="20"/></FormBtn>
                <FormInput
                    type="text"
                    value={inputValue}
                    onChange={this.handleChange}
                    autocomplete="off"
                    placeholder="Search images and photos"
                />
        </Form>
        )
    }
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}