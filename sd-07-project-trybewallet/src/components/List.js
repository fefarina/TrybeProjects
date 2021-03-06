import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteExpense } from '../actions';

class List extends Component {
  deleteExpenses({ target: { value } }) {
    const { expenses, delet } = this.props;
    const newWallet = expenses.filter((item) => item.id !== Number(value));
    delet(newWallet);
  }

  render() {
    const { expenses } = this.props;

    return (
      <div>
        <div>
          <span>Descrição</span>
          <span>Tag</span>
          <span>Método de pagamento</span>
          <span>Valor</span>
          <span>Moeda</span>
          <span>Câmbio utilizado</span>
          <span>Valor convertido</span>
          <span>Moeda de conversão</span>
          <span>Editar/Excluir</span>
        </div>
        <div>
          {expenses.map((expense) => (
            <div
              key={ expense.id }
              style={ {
                display: 'flex',
                justifyContent: 'space-around',
                height: 50,
                alignItems: 'center',
              } }
            >
              <span role="cell">
                {expense.description}
              </span>
              <span role="cell">
                {expense.tag}
              </span>
              <span role="cell">
                {expense.method}
              </span>
              <span role="cell">
                {expense.value}
              </span>
              <span role="cell">
                {Object.values(expense.exchangeRates)
                  .filter((item) => item.code === expense.currency)[0].name}
              </span>
              <span role="cell">
                {Number(Object.values(expense.exchangeRates)
                  .filter((item) => item.code === expense.currency)[0].ask).toFixed(2)}
              </span>
              <span role="cell">
                {Number((Object.values(expense.exchangeRates).filter(
                  (item) => item.code === expense.currency,
                )[0].ask) * expense.value).toFixed(2)}
              </span>
              <span role="cell">
                Real
              </span>
              <button
                type="button"
                value={ expense.id }
                data-testid="delete-btn"
                onClick={ (e) => this.deleteExpenses(e) }
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

List.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  delet: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet: { expenses, currencies } }) => ({
  expenses,
  currencies,
});

const mapDispatchToProps = (dispatch) => ({
  delet: (expense) => dispatch(deleteExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
