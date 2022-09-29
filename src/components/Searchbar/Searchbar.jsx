import PropTypes from 'prop-types'
import { SerchContainer } from "./Searchbar.styled";
import { SearchForm } from "../SearchForm/SearchForm";

export const Searchbar = ({onSubmit}) => {
    return (
        <SerchContainer>
            <SearchForm onSubmit={onSubmit} />
        </SerchContainer>
    )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}