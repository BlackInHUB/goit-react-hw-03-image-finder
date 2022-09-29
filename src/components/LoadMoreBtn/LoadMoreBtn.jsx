import PropTypes from 'prop-types'
import { Btn } from "./LoadMoreBtn.styled";

export const LoadMoreBtn = ({loadMore}) => {
    return (
        <Btn type="button" onClick={loadMore}>Load more</Btn>
    )
}

LoadMoreBtn.propTypes = {
    loadMore: PropTypes.func.isRequired
}