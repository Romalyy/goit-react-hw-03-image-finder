import React from "react";

import { Component } from 'react';
import PropTypes from "prop-types";
// import { FaBeer } from 'react-icons/fa';
import { BiSearch } from "react-icons/bi";
import s from './searchbar.module.css';

class SearchBar extends Component {
    state = {
        search: '',
    }

    handleChange = ({target}) => {
        const {value} = target;
        this.setState({
            search: value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {onSubmit} = this.props;
        onSubmit({...this.state});
        this.setState({
            search: ""
        })
    }

    render() {
        const { handleChange, handleSubmit } = this;
        
        return (
                <header className={s.searchbar}>
                    <form className={s.form} onSubmit={handleSubmit}>
                        <input
                        className={s.input}
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                        onChange={handleChange}
                        />
                        <button type="submit" className={s.button}>
                        <span className={s.button_label}>Search</span>
                        <BiSearch className={ s.search_icon} />
                        </button>
                    </form>
                </header>
            )
    }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;