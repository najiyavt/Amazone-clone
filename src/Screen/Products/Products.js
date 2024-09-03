import React from 'react'
import './Products.css'
const Products = () => {
  return (
    <div className='products'>
        <div className='productsToBanner'>
            <div className='productsToBannerItems' > Electronics</div>
            <div className='productsToBannerItemsMenu'>Mobiles & Accessories</div>
            <div className='productsToBannerItemsMenu'>Laptops & Accessories</div>
            <div className='productsToBannerItemsMenu'>TV & Home Entertainment</div>
            <div className='productsToBannerItemsMenu'>Audio</div>
            <div className='productsToBannerItemsMenu'>Cameras</div>
            <div className='productsToBannerItemsMenu'>Computer Peripherals</div>
            <div className='productsToBannerItemsMenu'>Smart Technology</div>
            <div className='productsToBannerItemsMenu'>Musical Instruments</div>
            <div className='productsToBannerItemsMenu'>Office & STationary</div>
        </div>
    

        {/* <div className='productMainPage'>
            <div className='productMainPageCategory'>
                <div className='productMainPagedivCategoryTitle'>Category</div>
                <div className='productMainPageCategoryContent'>
                    <div className='productMainPageCategoryTitleContent'>Computers & Accessories</div>
                    <div className='productMainPageCategoryTitleContent'>Macbooks</div>
                    <div className='productMainPageCategoryTitleContent'>Amazon Prime</div>
                    <div className='productMainPageCategoryTitleContent'>Average Customer Review</div>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Products
