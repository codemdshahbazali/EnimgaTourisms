import React from "react";

function Carousel() {
	return (
		<div
			id="carouselExampleIndicators"
			className="carousel slide"
			data-bs-ride="carousel"
		>
			<div className="carousel-indicators">
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="1"
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="2"
					aria-label="Slide 3"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="3"
					aria-label="Slide 4"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="4"
					aria-label="Slide 5"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="5"
					aria-label="Slide 6"
				></button>
			</div>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						src="https://lh3.googleusercontent.com/Z41xPvgz5bs8WO_OR-GARntiXFQnvc0aqf6vZmzK1dTMJ7C66pHlxXDVg4sjQXP4rdhB9JOOExTRPnxlEse0iMYr9iHF_Rf8P16c_MP1KPQkF_E2Gk7EJ7itLfnUjYeQB_0AhY7WAHyQbbFBeCCWXM8Pu_XLhQnnKDMfvzUnftWCNiYl_5qsL4Qa8OFK74cgSy0UqlQmYDDRG_bDM8StK_NHt8ARBP_nONZVIeYFhIn9rEWzZbMUjZ4gNB10b2wjr5WsyehYT2MV7LMT0kBe3JQDz2i8zpilm7GqM6UMwTD6PLYrhinqmKFbYQRvm-VihKtypW6TmuYniXVuvwbOlYVpHYYlA8k_mx7nb1RUjaOcxbmGeqB91SR6Qrqm76E5rZzPKMQRfJVA4ABBv4AyF3g-cbttdgyVjN3dj-pVCp8YuyuE2lhxHuRzYdU6dS6Po3445I1sOYjHbWJq0W7Ajg_PWCtS8x9SKQnE6q27VpnfVVu2CiXxCXnM9M9KHByQbI5kvBFSMr65bjXds_Gjn0wSSv0R2jUQt9E7ZWtTny8EMJkMmxwWYWzUCusBG5KSydJJ-vtI1-RdVsccQpvGExTghA_jmoOTQWzYKNQs82X7Dp4gKOSldrB6rC7bHRONU5i6Axd_Rx_a9V1ebvCmGPz-zeTHfI8rjwXKR-yad_66qMaPE62a-ACvXjAUo3KK66JVXNO1b_qHN5ni1fco9nw=w1588-h893-no?authuser=1"
						className="d-block "
						alt="..."
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://lh3.googleusercontent.com/agGxQs0NYbA_FG5f17n0RsXxlk4W7aYrn-HqpD9bnz2zDiD02ttm5tpsNy6QugW33sBcl2n4XaGmcKmJ435ONRAUI_mr_dwHYMOHryBxjh42DUOCvWtawetR4eLoUK2Kpq9O40d9w674c2YZCBAsJoeDgv88LV_Hw20cVEJpHfQ5DnN646Sfc0gZb1r1cX_S61XG41x6IcxP0Hk5My21cfktl6qeW8RjfKq6L4FReAWmnOc3EwPPn-1RCr7kc7gLUX60oLDDt3vPmXOoicj0DMC209_Wdld8PDLCaJkqAqByT0wzT_g3nAKvmd5_TCB4XubECwlN4KgAhvsJgGXutZ0-_hWmX_rsUP4zI1GZqiftvaTxNkS-kTlyMmM7u7Ftxp0WErP4ZLGLGPnfbGdTWQ4uwAi-P0tkrYpmGbeS99IZsNa7aBMDqplnvsp_cF1tUIn5XaV9YajspEtndZJnKSqshzGKsWi8EXUJqQcCa_72UWzZxxgadqdQ4gEbVkllCNvGiT3BjOV_QiwKagGBhjP24w_MJErwymaFLKmy_BKpJ8SMej4HA8xY8XAVXTkUA-1qXzPw2qHS-Y_8M83UDAjTJLUNm7j17LT-UbWWIFkzWp-MnnLCSw1xGJt0vJ8nch2s850nFG3N1w2aF1GzInp0fE1_Zk7Ox6y1QCntX84NdxE2e5CwKHruTAErSJWFAkrvj19TCiShYIT69WgVvxo=w1588-h893-no?authuser=1"
						className="d-block "
						alt="..."
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://lh3.googleusercontent.com/LVrKSTppzR7LaPw5BnM4a_YJzWSjMM-0fosdIGdA46SUFkgZ2f7ZkULfcu65GZuJg7IqUvcVM3YL-j2cZb7rxpxE68A4_XZpYj3jTfvm4TcyMdUd8w7OV-ow74h9Pi2tVZvnNMOMdnwfc2ncfBx6G-yg27DdrMHDOrbSos39m_lryJPhamLF4ygfc015d66JpNwoK2QSPrrlD9luJd8M0Zl3JvB7JHOeUTa_sj1SVeeMdZrTAOwczY9zbCO_ybNIHXMbZz8IxdEK5IwqXpWxc1blqgqxdXhVtW7Bn-UcXGBCkCdUJQoCfz0gNfTHTAlES8sZ0tfCYXgqeMoACctWUrZPf7GIU6A4ILYQiv6xKMs1et0jCT_kf4ULS7aE74boia6GCUZYWUSqZvp0IP4voM0W4u2blYl6P_8GVH9tW2qm7H7iqNqukVqSDe-8I0i-i6ddQyTgykKLXRxzjXHOyEYGqAtsZIvidliLJUv0w6YA68Rb_hdMWaHPmn9K9zXKwksDSpyuwlCRv_WQc3Z_rfH3j1kzkpszlkM19u9XKdSpt0BI1_bR9lnpFPW-4t-dTarXLB8sV78YlciJ_ZLsIBJdzSIqNx7idGP2AUkxwDOCqY6dOUV2YDRuIJOg6-lQP-t0wMKOVM0EYqZgzXGHIUW2H-IATaGli8GfLcWDTOKH4d-DTqpdzxwQ44BvkERAYgj1XQXXd2Pa9z9QGD0T6ZI=w1588-h893-no?authuser=1"
						className="d-block "
						alt="..."
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://lh3.googleusercontent.com/EFOAtyYmLxlX-MZK3Lnu4FUIoNLCvw4vQxNg_pH7laRvP-CGcNrzDeSEZ71d9QtmANyKXnBIf1SFYX8MZDWoC9_fObof48EsteGElcFkMcX7Z15Njo_Nzu80gnf9LOrvyB0Z3PhcJJmxAq13zcs9fj5lOIMvv24eVG7VD2nb8MWiHieb_ge3gsG_-6slcCFzqr9zSMvPHdMH5uqiYkdzZLLmaiZywzwR5Z27VnCoHMkmYbGDqcRFQKyvq5EsIjNuNyh39mQye56Zi7r9PTLK7H7Ay-dqf_UkvGJrmR6j1M_Xntt840p8ByT-2Y60eS1ELWCR4MuBvUNRu6gFF8EXe-8NcQlxUBmssI9vtfgZIDfqUQaXXIQQdVtp4n-lJ-TRIP_SMLEvew95VvqvB8H7dkETxwc3BWlmlxRCDSsg1UKM91FAHFUqDFu7BZegYYK_N0rPkbXdRn9SKkbzOVz-0AdEoKwNIdqqvL2-JBxHu6L6jHM50xx-9PgTYSyRMKGQPII_L78y4JEhs2HDsck8ctKJiUjwGL4oHMJ6cbXyityYfJu01GoreBvgq57UHVhtRVXFGHO5RA0sd0yr0hARWc6bNp3WWAD7HX1af1FRFCxf8hWzo3_GpJp2oURaDpaAhFWPZeVDbzi-1yuNDcY867tMVk92NKXxg-EcfR0ZH_hjZCYaZ-7NBaLyO3x0yEYjNU9yhtxdcblQ7d6HIMbCKH4=w1588-h893-no?authuser=1"
						className="d-block "
						alt="..."
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://lh3.googleusercontent.com/-4GjxU3vffoPqJ9J4yLVXHzv9Hq-6RbBAHrV59oYKEcgz7fukv-1hqrPmwVKZUrosvFhIIgNrnK8YlSwHQnx3HzzSprDc4CUwmmKhCCn59qTEacndGm72_qGT-oNaQTw6GANw_py46F2FuBO--33c8h5l6RCpHQ9PP1zXTTbqZukAGNwEkfB9pWewvzhF-lfMEaZKi1YI2BYP0jueQORQlFJ6xFJTM1j2AtlYHAmJ55yx9GC7qdeM_Pwi_-ba_CpKAjuDed7KhKuYKsC-WtBro5vBx0InM_6J66MgQT6WrqGOEhm5zO7Sx9INQeqy2CY0pePhLA3B4mlkRqbl1UT_0eR1wRljQasit3Af16ELnI_CGEGojJwwu2QbzOCOzES1r6_Vcpe44d50r2i0VLQraXJu28os-gKs2-bW6KmtSl1txEIh6eR9QYN-eoQhhcdKjPV0SmHFZCS2mg3lkffkhPVxrEgFnZFE30CdXCwqu4-gua6fXZXcnkVvE_cPbd30b0P0trKtXyKl0ZgmsTNmFCY8qfr1yP6Y_Rwe_3vSabd8K9B6QaUF_kqfXfOdzduwJbYWhFeuVJss5wx4RUd7tn0Dhamb9yJuuGUiPnbAfatmD4oq6e7wci-x7fLnU3qmYcpSPhW7xEIrCMSfnFzYIF_Ee66LRFdScyuzh4IaI6ZsHzMcPSLFUuRVg-RQ3U-pOeOKiQRAhcMlmBlX2l6DtQ=w1588-h893-no?authuser=1"
						className="d-block "
						alt="..."
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://lh3.googleusercontent.com/3nj9KtChXINfBNxviaCP6S2ihL4180H_LcTSRRerHsTekjddJVYpin5f6xC45behyRADYzLi9VX2NlQDVwRsXUMeHcA1p1fCmRfyfEaUFECRCy-Yf8oLXLCTiWg_PJ56NPdnRiWLfJVs1o5a304C6Zgn3kSeIDRTY5vAkJILRfN-13lcTjTikJ8gqyShAByba2kSQFkKiXeGm2hVJxe7D1z2gBBwwXC5yeLPSncbpLH7SN_EaveogjUCVj5MIZ69pUo0ouqrNuDRhANqw1ggUnFLtrn9GfkEbCW-KFij6aNmBdMQ1LJeHMV9O0I56UASUK25VzyxYd22pFydj3YtYFy5FWjQgmbzY_AMp-sJfQ7lIQ8u2L_Ed6Ho2NCHukKQJBSfWniVuH5YKN-RbB8A1fGLHKo2wtPK12mIy-LGbYQh_cJsxfYbilaQND45sh2_tNCdJ3C4OYMVKfS63CJHIym6YNGy45C4RhjdbW-wo5Ea5n1fGGU6mBbZvYibLp32ggkTx1nshjrWqO65TEFpPhpky-esmyCZTyTLrwQMxJSgL_6B4hH8PuVZXu9rP8Uw8pglr8Sb-OGFks5iwbURsKXmQOfI-O2ncQSthVMOF_dUML2WjVyhxZ3Ib2KzRAO54oz6trSY8KwSCvymZQm6M2vz6Z7NhybgbHbL-d_377U4HfMr3csfv-6yk_-Lqix6rIni9_BZsXkS-Iqp8pth2mc=w1588-h893-no?authuser=1"
						className="d-block "
						alt="..."
					/>
				</div>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>

			<button
				onClick={() => {
					window.scrollBy(0, 700);
				}}
				className="explore"
			>
				Explore More
			</button>
		</div>
	);
}

export default Carousel;
