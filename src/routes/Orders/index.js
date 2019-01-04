import styles from './index.less';
import { Table } from 'antd';
import { connect } from 'dva';


const columns = [{
  title: 'Order Number',
  dataIndex: 'number',
  key: 'number'
}, {
  title: 'Customer Name',
  dataIndex: 'customer.name',
  key: 'customer.name',
}, {
  title: 'Customer Address',
  dataIndex: 'customer.address',
  key: 'customer.address',
}, {
  title: 'Status',
  dataIndex: 'status',
  key: 'status',
}];

const Orders = ({dispatch, order}) => {
  return (
    <div className={styles.container}>
      <h2>List of Orders</h2>
      <Table bordered columns={columns} dataSource={order.items} />
    </div>
  )
}

export default connect(({ order }) => ({
  order,
}))(Orders);