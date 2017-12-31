import React, {Component} from 'react'
import styles from './sidebar.module.css'

class Sidebar extends Component{
  render () {
    return (
      <aside className={`column is-2 ${styles.aside} hero is-fullheight`}>
      <div>
          <div className="has-text-centered">
          <span className="icon"></span>
            <h2 className="title is-4"> <i className="fa fa-twitter"></i> Dashboard</h2>
          </div>

          <div className={styles.main}>
            <a href="#" className={`${styles.active} ${styles.item}`}>
              <span className="icon"><i className="fa fa-inbox"></i></span><span className="name">Inbox</span>
            </a>
            <a href="#" className={styles.item}>
              <span className="icon"><i className="fa fa-star"></i></span><span className="name">Starred</span>
            </a>
          </div>
      </div>
      </aside>
    )
  }
}

export default Sidebar