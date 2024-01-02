// Si el proyecto está en VITE instala: yarn add prop-types
import PropTypes from 'prop-types';


export const FirstApp = ({ title, subtitle, name }) => {
    return (
        <>
            <h1 data-testid ="test-title">{title}</h1>
            <p>{subtitle}</p>
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    );
}

// Uso delas proptypes
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

// Default props
FirstApp.defaultProps = {
    title: 'No hay un título',
    subtitle: ' No hay subtitulo'
}