import "./index.css";

const Main = ({ toggleSidebar }) => {
	return (
		<div className="Main">
			<div className="Header">
				<p className="Greeting">Hello Shahrukh 👋,</p>

				<div className="MobileHeader">
					<button className="SidebarOpener" onClick={toggleSidebar}>
						<svg
							width="16"
							height="16"
							fill="#fff"
							className="bi bi-list"
							viewBox="0 0 16 16"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
							/>
						</svg>
					</button>

					<div className="Search">
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="Icon"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
						</svg>
						<input placeholder="Search" />
					</div>
				</div>
			</div>

			<div className="Body">
				<div className="BasicStats">
					<div className="BasicStat Earnings">
						<div className="Icon" style={{ backgroundColor: "#dcfeea" }}>
							<svg
								width="40"
								height="40"
								fill="#0aaa4a"
								viewBox="0 0 16 16"
								className="bi bi-currency-dollar"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
							</svg>
						</div>

						<div className="Details">
							<p className="Title">Earning</p>
							<h3 className="PrimaryText">$198k</h3>
							<h3 className="SecondaryText">
								<span style={{ color: "#10ae54" }}>&uarr; 37%</span> this month
							</h3>
						</div>
					</div>
					<div className="BasicStat Orders">
						<div className="Icon" style={{ backgroundColor: "#e7dafe" }}>
							<svg
								width="40"
								height="40"
								fill="#9e01fe"
								viewBox="0 0 16 16"
								className="bi bi-receipt"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
								<path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
							</svg>
						</div>

						<div className="Details">
							<p className="Title">Orders</p>
							<h3 className="PrimaryText">$2.4k</h3>
							<h3 className="SecondaryText">
								<span style={{ color: "#d21a59" }}>&darr; 2%</span> this month
							</h3>
						</div>
					</div>
					<div className="BasicStat Balance">
						<div className="Icon" style={{ backgroundColor: "#cdf2fe" }}>
							<svg
								width="40"
								height="40"
								fill="#095bbe"
								viewBox="0 0 16 16"
								className="bi bi-wallet2"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
							</svg>
						</div>

						<div className="Details">
							<p className="Title">Balance</p>
							<h3 className="PrimaryText">$2.4k</h3>
							<h3 className="SecondaryText">
								<span style={{ color: "#d21a59" }}>&darr; 2%</span> this month
							</h3>
						</div>
					</div>
					<div className="BasicStat Sales">
						<div className="Icon" style={{ backgroundColor: "#ffb7dc" }}>
							<svg
								width="40"
								height="40"
								fill="#d9031b"
								viewBox="0 0 16 16"
								className="bi bi-basket3"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z" />
							</svg>
						</div>

						<div className="Details">
							<p className="Title">Total sales</p>
							<h3 className="PrimaryText">$89k</h3>
							<h3 className="SecondaryText">
								<span style={{ color: "#10ae54" }}>&uarr; 11%</span> this week
							</h3>
						</div>
					</div>
				</div>

				<div className="GraphStats">
					<div className="GraphStat Overview">
						<div className="Header">
							<div>
								<p className="Title">Overview</p>
								<p className="SubTitle">Monthly Earning</p>
							</div>

							<select className="DurationSelector" id="duration-select">
								<option value="Week">Weekly</option>
								<option value="Month">Monthly</option>
								<option value="Year">Yearly</option>
							</select>
						</div>

						<div className="Body">
							<div className="BarGraph">
								<div className="Bar">
									<div style={{ height: "80px" }}></div>

									<p className="BarText">Jan</p>
								</div>
								<div className="Bar">
									<div style={{ height: "120px" }}></div>

									<p className="BarText">Feb</p>
								</div>
								<div className="Bar">
									<div style={{ height: "120px" }}></div>

									<p className="BarText">Mar</p>
								</div>
								<div className="Bar">
									<div style={{ height: "150px" }}></div>

									<p className="BarText">Apr</p>
								</div>
								<div className="Bar">
									<div style={{ height: "180px" }}></div>

									<p className="BarText">May</p>
								</div>
								<div className="Bar">
									<div style={{ height: "200px" }}></div>

									<p className="BarText">Jun</p>
								</div>
								<div className="Bar">
									<div style={{ height: "150px" }}></div>

									<p className="BarText">Jul</p>
								</div>
								<div className="HghtdBar Bar">
									<div style={{ height: "210px" }}></div>

									<p className="BarText">Aug</p>
								</div>
								<div className="Bar">
									<div style={{ height: "150px" }}></div>

									<p className="BarText">Sep</p>
								</div>
								<div className="Bar">
									<div style={{ height: "209px" }}></div>

									<p className="BarText">Oct</p>
								</div>
								<div className="Bar">
									<div style={{ height: "190px" }}></div>

									<p className="BarText">Nov</p>
								</div>
								<div className="Bar">
									<div style={{ height: "150px" }}></div>

									<p className="BarText">Dec</p>
								</div>
							</div>
						</div>
					</div>

					<div className="GraphStat Customers">
						<div className="Header">
							<p className="Title">Customers</p>
							<p className="SubTitle">Customers that buy products</p>
						</div>

						<div className="Body">
							<div className="PieGraph">
								<svg className="Pies">
									<circle r="40%" cx="50%" cy="50%" className="LowerPie" />
									<circle r="40%" cx="50%" cy="50%" className="MidPie" />
									<circle r="40%" cx="50%" cy="50%" className="UpperPie" />
								</svg>

								<p className="PieText">
									<span className="HghtdPieText">65%</span> <br /> Total New Customers
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="Products">
					<div className="Header">
						<p className="Title">Product Sell</p>

						<div className="FilterOptions">
							<div className="Search">
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="currentColor"
									className="Icon"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
								</svg>
								<input placeholder="Search" />
							</div>

							<select className="DurationSelector" id="duration-select">
								<option value="Week">Last 30 days</option>
								<option value="Month">Last 90 days</option>
								<option value="Year">Last year</option>
							</select>
						</div>
					</div>

					<div className="Body">
						<div className="SoldProductList">
							<div className="Headings">
								<p className="Info">Product</p>
								<p className="Stock">Stock</p>
								<p className="Price">Price</p>
								<p className="Sales">Total Sales</p>
							</div>

							<div className="SoldProducts">
								<div className="SoldProduct">
									<div className="Info">
										<img className="Image" src="img/image.jpg" />
										<div>
											<p className="Name">Abstract 3D</p>
											<p className="Desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
										</div>
									</div>
									<div className="Stock">
										<p>32 in stock</p>
									</div>
									<div className="Price">
										<p>$45.99</p>
									</div>
									<div className="Sales">
										<p>20</p>
									</div>
								</div>

								<div className="SoldProduct">
									<div className="Info">
										<img className="Image" src="img/image.jpg" />
										<div>
											<p className="Name">Sarphens Illustration</p>
											<p className="Desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
										</div>
									</div>
									<div className="Stock">
										<p>32 in stock</p>
									</div>
									<div className="Price">
										<p>$45.99</p>
									</div>
									<div className="Sales">
										<p>20</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
