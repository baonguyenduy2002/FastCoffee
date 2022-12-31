import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

function SideBarButton(props) {
	const { item, state, setState } = props;
	const [iconState, setIconState] = useState(
		state === item.name ? item.icon_onFocus : item.icon
	);

	useEffect(
		() => setIconState(state === item.name ? item.icon_onFocus : item.icon),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[state]
	);

	if (state === item.name) {
		return (
			<>
				<Link
					to={item.name}
					className="Sidebar-button"
					onBlur={() => setIconState(item.icon)}
				>
					<img src={item.icon_onFocus} alt={item.name} />
				</Link>
			</>
		);
	}
	return (
		<>
			<Link
				to={item.name}
				className="Sidebar-button"
				onClick={() => setState(item.name)}
				onMouseOver={() =>
					setIconState(
						state === item.name ? item.icon_onFocus : item.icon_onHover
					)
				}
				onMouseLeave={() =>
					setIconState(state === item.name ? item.icon_onFocus : item.icon)
				}
				onBlur={() => setIconState(item.icon)}
			>
				<img
					src={state === item.name ? item.icon_onFocus : iconState}
					alt={item.name}
				/>
			</Link>
		</>
	);
}

export default SideBarButton;
