import { Link, useRouteMatch } from "react-router-dom";

const trend_json = [
	{ name: "programming", tweet_count: "213k" },
	{ name: "devchallenges", tweet_count: "123k" },
	{ name: "frontend", tweet_count: "34k" },
	{ name: "programming", tweet_count: "213k" },
	{ name: "devchallenges", tweet_count: "123k" },
	{ name: "frontend", tweet_count: "34k" },
	{ name: "frontend", tweet_count: "34k" },
	{ name: "programming", tweet_count: "213k" },
	{ name: "devchallenges", tweet_count: "123k" },
	{ name: "frontend", tweet_count: "34k" },
];

const Trends = () => {
	const { path } = useRouteMatch();
	return (
		<div className="px-4 py-2">
			<span className="font-poppins font-semibold text-tweeter-gray mb-1">
				Trends for you
			</span>
			<hr className="text-gray-500  mb-2" />
			<div className="flex flex-col text-tweeter-trend-gray">
				{trend_json.map(({ name, tweet_count }, index) => (
					<Link
						to={`${path}/trend/${name}`}
						className="w-full mb-3 hover:bg-slate-300  font-poppins"
						key={index}
					>
						<span className="block text-base capitalize font-bold">{`#${name}`}</span>
						<span className="block text-xs">{`${tweet_count} Tweets`}</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Trends;
