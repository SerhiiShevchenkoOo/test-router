import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
export default props => {
	const [active, setActive] = useState(false);

	return (
		<Popup
			lockScroll={true}
			trigger={props.trigger}
			onOpen={() => setActive(true)}
			onClose={() => setActive(false)}
			modal
			nested>
			{close => (
				<>
					<div className=' h-1/2 md:h-full md:w-1/2'>
						<img
							className={'w-full h-full object-cover object-center '}
							src={props.image}
							alt={props.image}
						/>
					</div>
					<div className='p-6 text-lg md:text-3xl h-1/2 md:h-full md:w-1/2 overflow-auto'>
						{props.info}
					</div>

					<button
						className='md:absolute focus:text-white p-5 rounded-full rounded-r-none rounded-b-none focus:bg-gray-700 bottom-0 right-0 inline'
						onClick={() => {
							close();
						}}>
						x
					</button>
				</>
			)}
		</Popup>
	);
};
