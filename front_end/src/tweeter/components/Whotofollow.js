const followrecommendations = [
	{
		profile:
			"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=785&q=80",
		name: "Mikael Stanley",
		followers_count: "230k",
		description: "Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰",
		cover: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=785&q=80",
	},
	{
		profile:
			"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=785&q=80",
		name: "Mikael Stanley",
		followers_count: "230k",
		description: "Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰",
		cover: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=785&q=80",
	},
];

const Whotofollow = () => {
	return (
		<div className="px-4 py-4 bg-navbar rounded-xl mt-20 w-1/4 overflow-y-scroll">
			<span className="font-poppins font-semibold text-tweeter-gray text-sm mb-1 block">
				Who to follow
			</span>
			<hr className="text-gray-500  mb-3" />
			<div>
				{followrecommendations.map(
					({ profile, name, followers_count, description, cover }, index) => (
						<div className="overflow-hidden" key={index}>
							<div className="flex items-center justify-between  flex-shrink-0">
								<div className="flex items-center gap-4 flex-shrink-0">
									<img
										src={`${profile}`}
										className="h-10 w-10 block  rounded object-cover justify-self-start"
										alt="not found"
										loading="lazy"
									/>
									<div className="flex flex-col">
										<span className="font-poppins text-black text-base capitalize">
											{`${name}`}
										</span>
										<span className="font-sans text-tweeter-grey text-sm">
											{`${followers_count} followers`}
										</span>
									</div>
								</div>
								<button className="bg-tweeter-blue-highlight text-sans text-sm tracking-normal text-white rounded-lg px-2 py-1 font-sans flex items-center gap-1">
									<span className="material-icons text-white text-base mr-[0.1rem]">
										person_add_alt
									</span>
									Follow
								</button>
							</div>
							<span className="text-tweeter-grey font-sans text-sm block my-2">
								{`${description}`}
							</span>
							<img
								className="w-full h-16 rounded-lg object-cover"
								src={`${cover}`}
								alt="not found"
								loading="lazy"
							/>
							<hr className="text-gray-500  mb-2 mt-4 block" />
						</div>
					),
				)}
			</div>
		</div>
	);
};
export default Whotofollow;
