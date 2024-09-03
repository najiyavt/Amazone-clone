import React from 'react'
import './HomeBanner.css'
import HomeBannerItemProduct from '../../../homeProduct.json'

export const HomeBanner = () => {
    return (
        <div className='homeBanner'>
            <img className='homeBannerImg' src='https://c.media-amazon.com/images/G/31/AmazonBusiness/img24/GW/Aug/GW-Hero/ExclusiveBusinessDeals_3000_1200_2208._CB565876933_.jpg' />
            <div className='grayBackgroundHomeBanner'></div>

            <div className='homeBannerItemDiv'>
                {
                    HomeBannerItemProduct.product.map((item, index) => {
                        return (
                            <div className='homeBannerItemDivCard'>
                                <div className='homeBannerItemDivCardTitle'>Title</div>
                                <div className='imgHomeBannerDivCard'>

                                    {
                                        item.imgs.map((it, ind) => {
                                            return (
                                                <div className='imgBannerHomeDiv'>
                                                    <img className='imgBannerHomeDivImg' src={it} />
                                                    <div className='imgBannerImgName'>Keyboards Starting ₹199 |  Keyboards</div>
                                                </div>
                                            )
                                        })
                                    }


                                </div>

                                <div className='seeMoreBanner'>See More</div>
                            </div>
                        )
                    })
                }

            </div>


        </div>
    )
}

export default HomeBanner