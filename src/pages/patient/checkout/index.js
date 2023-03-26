import {useEffect} from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import styled from "@emotion/styled";
import Image from 'next/image';
import OfferBox from "@/components/OfferBox"; 
import Navbar from "@/components/Navbar";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
loadStripe(  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckOutPreview = () => {
    const router = useRouter();
    const {success, canceled} = router.query;


 useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    // const query = new URLSearchParams(window.location.search);

    if(success != undefined || canceled != undefined){
        if (success) {
        console.log('Order placed! You will receive an email confirmation.');
        }

        if (canceled) {
        console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        }
    }
  }, [success, canceled]);

  return (
    <>
    <Navbar />
    <CheckoutContainer>
       
    <div className="content">
    <div className="wrapper">
        <div className="container">
            <section className="details-order-content">
                <ProductInfo>
                    <div className="head">
                        <div className="profile">
                            <img
                            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="img"
                            />
                            <span className="name">Ankur Yadav</span>
                        </div>
                        <span className="price">$200</span>
                        </div>
                        <div className="content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quidem
                        consectetur magni soluta eveniet deserunt possimus aliquam molestias
                        sapiente alias corporis, quis nesciunt ipsa quisquam totam? Est natus
                        inventore vel.
                        </div>
                        <div className="foot">
                        
                    </div>
                </ProductInfo>
            </section>
            <form action="/api/checkout_sessions" method="POST">
            <section className="summary-order-content">
                <div className="card-summary">
                    <h3 className="title-card">CHECKOUT </h3>
                    <div className="container-product-img">
                        <Image classNameName='image'
                        src='https://static.vecteezy.com/system/resources/previews/004/578/683/original/a-patient-consults-a-doctor-and-nurse-free-vector.jpg'
                        alt='profile' width={150}
                        height ={150} />                    
                    </div>
                    <div className="content-product-information">
                        <div className="content-product-name-price">
                            <h3 className="title-product">Consultation name</h3>
                            <p className="subtitle-20bold">200$</p>
                        </div>
                    </div>
                    <button type="submit" role="link">
                        Checkout
                    </button>
                </div>
                <div className="content-characteristic information-processor">
                 <h3 className="title-content">Terms and Conditions</h3>
                </div>

                <section className="selection-option">
                    <label for="8N" className="selection-option-label first-option" aria-selected="true">
                        <p className="form-selection-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quidem
                        consectetur magni soluta eveniet deserunt possimus aliquam molestias
                        </p>
                    </label>
                    <label for="8N" className="selection-option-label first-option" aria-selected="true">
                        <p className="form-selection-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quidem
                        consectetur magni soluta eveniet deserunt possimus aliquam molestias
                        </p>
                    </label>
                    <label for="8N" className="selection-option-label first-option" aria-selected="true">
                        <p className="form-selection-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quidem
                        consectetur magni soluta eveniet deserunt possimus aliquam molestias
                        </p>
                    </label>
                </section>
            </section>
            </form>
        </div>
    </div>
</div>    
    </CheckoutContainer>
    </>
  );
};
const ProductInfo = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: var(--secondary);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  div {
    width: 100%;
    padding: 0.5rem;
  }

  .head {
    display: flex;
    justify-content: center;
    align-items: center;
    .profile {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 2rem;
        height: 2rem;
        border-radius: 2rem;
      }
      .name {
        padding-left: 0.5rem;
      }
    }
    .price {
      text-align: center;
      font-size: 2rem;
      padding: 0.25rem 1rem;
    }
  }
  .foot {
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  `;

const CheckoutContainer = styled.div`
section {
    background: #ffffff;
    display: flex;
    flex-direction: column;
    width: 450px;
    height: 112px;
    border-radius: 6px;
    justify-content: space-between;
    }
button {
    width: 100%;
    height: 45px;
    padding: 10px;
    background: #556cd6;
    border-radius: 4px;
    color: white;
    border: 0;
    font-size: 19px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    }
    button:hover {
    opacity: 0.8;
    }
.wrapper {
    display: block;
    margin: auto;
    
    margin-inline: 16px;
}
.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(328px, 513px));
    gap: 0;
    justify-content: center;
    margin-block: 80px;
}
.details-order-content {
    background-color: var(--bg);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: fit-content;
}
.summary-order-content {
    background-color: var(--secondary);
    border-end-start-radius: 10px;
    border-end-end-radius: 10px;
    height: fit-content;
}
.card-summary {
    padding-inline: 16px;
    padding-block: 40px;
}
.title-card {
    
    font-size: 28px;
    text-align: center;
    font-weight: 500;
    margin: 0px;
}
.container-product-img {
    text-align: center;
    background-color: var(--white);
    margin-block-start: 24px;
}
.content-product-information {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin-block-end: 40px;
    gap: 24px;
}
.content-product-name-price {
    width: 100%;
}
.title-product {
    margin-block-end: 16px;
    font: var(--subtitle-20medium);
}
.subtitle-20bold{
    font-weight:bold;
}
.content-characteristic {
    margin-block-start: 24px;
    margin-block-end: 24px;
}
.title-content {
    margin-block-end: 8px;
}
.selection-option {
    position: relative;
    border: 2px solid var(--grey);
    border-radius: 4px;
    box-sizing: border-box;
    font: var(--body-16medium);
    margin-block-end: 8px;
}
.selection-option-label {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-block: 16px;
    padding-inline: 16px;
    cursor: pointer;
}
.selection-option-label[aria-selected='true'] {
    border: 2px solid var(--primary);
    border-radius: 4px;
}
`;

export default CheckOutPreview; 