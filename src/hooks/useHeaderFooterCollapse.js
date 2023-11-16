import { useEffect } from "react";

function useHeaderFooterCollapse(pageRef, setHeader, setFooter) {
	useEffect(() => {
		setFooter(false);
		pageRef.current.addEventListener('scroll', () => {
			const scrollTop = pageRef.current.scrollTop;
			const scrollHeight = pageRef.current.scrollHeight;
			const clientHeight = pageRef.current.clientHeight;

			if (scrollTop + clientHeight + 5 > scrollHeight) {
				setFooter(true);
			} else {
				setFooter(false);
			}

			if (scrollTop >= 10) {
				setHeader(false);
			} else {
				setHeader(true);
			}
		});
	}, []);
}

export default useHeaderFooterCollapse;