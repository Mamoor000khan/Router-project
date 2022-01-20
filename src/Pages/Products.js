import { Link } from 'react-router-dom';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import DeckIcon from '@material-ui/icons/Deck';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

import  classes from './Product.module.css';

const Products = () => {
    return <section className={classes.container}>      
              <h1 style={{color:'#044599'}}>The Product Page</h1>
                <Link to="/products/p1" style={{color:'#044599', marginBottom:'10px'}}>
                      <MenuBookIcon color="primary"/>
                          A Book
                </Link>
                        
                <Link to="/products/p2" style={{color:'#044599', marginBottom:'10px'}}>
                    <DeckIcon color="primary"/>
                          A Party
                </Link>
                  
                 <Link to="/products/p3" style={{color:'#044599'}}>
                          <ContactPhoneIcon color="primary"/>
                          Contact
                </Link>
           </section>
}

export default Products;