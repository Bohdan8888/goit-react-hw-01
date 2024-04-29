import css from "../Transaction/Transation.module.css"
export default function Transaction({transactions: {type, amount, currency}}) {
    return (<>
          <tr>
            <td className={css.td}>{type}</td>
            <td className={css.td}>{amount}</td>
            <td className={css.td}>{currency}</td>
          </tr>
      </>)
}