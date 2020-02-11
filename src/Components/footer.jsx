import React, { Component } from 'react'
import './footer.css'

export default class footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="first">
                    <span className="downloads">
                        <p><b>DOWNLOAD THE APP</b></p>
                        <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" width="200px"></img><br></br>
                        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrNUJT37TKDto2EidB-9eQVRwO_BL1pCH_1ZUw3cNZFWoyUaGp" width="230px"></img>
                        <h4>2000+ BRANDS</h4>
                        <h4>500000+ STYLES</h4>
                    </span>
                    <span className="jabong">
                        <h5>JABONG</h5>
                        <ul>
                            <li>Help / Support</li>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Gift Cards</li>
                            <li>FAQs</li>
                            <li>Terms and Condition Offers</li>
                        </ul>
                    </span>
                    <span className="policies"> 
                        <h5>OUR POLICIES</h5>
                        <ul>
                            <li>Terms and Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Vendor Code of Conduct</li>
                            <li>Whitehat</li>
                            <li>Deal of the Day</li>
                            <li><img src="https://image.shutterstock.com/image-illustration/original-stamp-seal-100-authentic-600w-1499214188.jpg" height="100px"></img></li>
                        </ul>
                    </span>
                    <span style={{float:"right"}} className="news">
                        <h5>SUBSCRIBE TO OUR NEWSLETTERS</h5>
                        <span>
                        <input className="search-input" placeholder="YOUR EMAIL ADDRESS"></input>
                        <button className="search-button">GENDER</button>
                        </span>
                        <br/>
                        <button className="subscribe">SUBSCRIBE</button>
                    </span>
                </div>
                <div className="imgs">
                    <span className="frst-img">
                        <img src="data:image/png;base64,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" width="40px"></img>
                        <span>CASH ON DELIVERY</span>
                    </span>
                    <span className="sec-img">
                        <img src="https://www.materialui.co/materialIcons/navigation/refresh_grey_192x192.png" width="40px"></img>
                        <span>15 DAYS RETURNS</span>
                    </span>
                    <span className="third-img">
                        <img src="data:image/png;base64,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" width="40px"></img>
                        <span>FREE SHIPPING</span>
                    </span>
                </div>
                <div className="brands">
                    <h5>TOP BRANDS</h5>
                    <p>Accessorize / adidas / adidas Originals / Aldo / All About You / Allen Solly / American Tourister / 
                        AND / Arrow / Asics / Aurelia / Biba / Blackberrys / 
                    </p>
                    <p>Calvin Klein Jeans / Caprese / Carlton London / Casio / Catwalk / CELIO / Clarks / Converse /
                         Crocs / Daniel Klein / Dorothy Perkins / Espirit / FABINDIA / Fila /
                    </p>
                    <p>Flying Machine / French Connection / Gas / Gini & Jony / Global Desi / Globus / Guess / Hidesign / 
                        Hummel / Hush Puppies / INC.5 / Indian Terrain /
                    </p>
                    <p>Jack & Jones / Jockey / John Players / Lakme / Lavie / Lee / Lee Cooper / L'OREAL PARIS / Louis Philippe / 
                        Mango / MARIE CLAIRE / Maybelline / Metro /
                    </p>
                    <p>Monte Carlo / Mufti / New Balance / Next / Nike / Only / Park Avenue / Parx / Pepe Jeans / 
                        Peter England / Puma / Ray Ban / Raymond / Red Chief / Red Tape /
                    </p>
                    <p>Reebok / Roadster / Sangria / Skechers / Spykar / Steve Madden / Superdry / Swayam / Tom Tailor / 
                        Tommy Hilfiger / TRESMODE / U.S.Polo Assn. /
                    </p>
                    <p>United Colors of Benetton / Van Heusen / Vans / Vero Moda / W / Wills Lifestyle / Woodland / Wrangler</p>
                    <h5>TOP CATEGORIES</h5>
                    <p>Women Clothing / Men Clothing / Sports / Men Shoes / Women Shoes / Bags / Accesories / Kids / Beauty / Home / Jewellery</p>
                </div>
                <div className="li">
                    <p><b>Online Fashion Shopping: convenient, fast and affordable!</b></p>
                    <p>Shopping is fun and exhilarating and more so when you can shop 24x7 without leaving the comfort of home. This in simpler words is what we call Jabong.com! Online shopping at Jabong.com is convenient and affordable. You can find your desired products more quickly and easily using our user-friendly online shopping platform. Fill your cart up to the brim in just a few seconds and get swift home delivery for all orders. All of this topped with our exclusive offers makes for an exciting, irresistible combo!</p>
                    <p><b>Jabong.com: the hottest online fashion destination of all times!</b></p>
                    <p>‘Fashion’ is definitely more accessible with Jabong.com. We showcase the chicest of products be it clothing, shoes, jewellery, accessories and cosmetics. Explore the latest collections of top brands like Nike, Puma, Sangria, Adidas, Dorothy Perkins, Biba , Levis, United Colors of Benetton and many others. Apart from these, brands that were only heard of but never found online before are now showcased at Jabong.com. Jabong.com is here to make dreams come true for all River Island and Mango lovers. Dorothy Perkins and Miss Selfridge are some other international labels that you will find here. If your wardrobe had been craving for a designer ethnic collection, then you can feast your eyes on Rohit Bal for Jabong.com. Also, take a tour of our fashion blog to stay abreast of the latest runway trends and be a trendsetter among your immediate circles.</p>
                    <p><b>Avail added online shopping benefits</b></p>
                    <p>You choose your product, order it online, and we deliver it right at your doorstep anywhere in India. You just need to pay for the product, while we ensure free shipping* all the time on almost everything with no strings attached. For any second thoughts after purchase, we have in place a no questions asked return policy as well. To offer you a safe and risk-free online shopping experience, we offer COD facility. Could you have asked for more?</p>
                    <p><b>Jabong.com: the 24 x7 Online Fashion & Lifestyle Store for everyone</b></p>
                    <p>Forget the fashion streets of the world. We, at Jabong.com, have all that you need to glam up your fashion quotient. From an extensive range of men’s shirts, western dresses for women, funky clothes for kids and matching footwear, sports shoes and accessories for everyone, we purvey diversity of choices in online shopping in India under one umbrella. Your Jabong Online Shop has arrived! Do not miss the attractive best buy prices and super discount coupons. Get more, pay less!</p>
                </div>
            </div>
        )
    }
}
