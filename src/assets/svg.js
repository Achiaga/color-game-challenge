export const CrownSvg = ({ size = 24 }) => (
	<svg
		fill='#fff'
		xmlns='http://www.w3.org/2000/svg'
		height={size}
		width={size}
		viewBox='0 0 32 32'>
		<path d='M 16 3 C 14.354991 3 13 4.3549901 13 6 C 13 7.125993 13.63434 8.112309 14.5625 8.625 L 11.625 14.5 L 7.03125 11.21875 C 7.6313215 10.668557 8 9.8696776 8 9 C 8 7.3549904 6.6450096 6 5 6 C 3.3549904 6 2 7.3549904 2 9 C 2 10.346851 2.9241199 11.470238 4.15625 11.84375 L 6 22 L 6 26 L 6 27 L 7 27 L 25 27 L 26 27 L 26 26 L 26 22 L 27.84375 11.84375 C 29.07588 11.470238 30 10.346852 30 9 C 30 7.3549901 28.645009 6 27 6 C 25.354991 6 24 7.3549901 24 9 C 24 9.8696781 24.368679 10.668557 24.96875 11.21875 L 20.375 14.5 L 17.4375 8.625 C 18.36566 8.112309 19 7.125993 19 6 C 19 4.3549901 17.645009 3 16 3 z M 16 5 C 16.564129 5 17 5.4358709 17 6 C 17 6.5641291 16.564129 7 16 7 C 15.435871 7 15 6.5641291 15 6 C 15 5.4358709 15.435871 5 16 5 z M 5 8 C 5.5641294 8 6 8.4358706 6 9 C 6 9.5641286 5.5641291 10 5 10 C 4.4358709 10 4 9.5641286 4 9 C 4 8.4358706 4.4358706 8 5 8 z M 27 8 C 27.564129 8 28 8.4358709 28 9 C 28 9.5641283 27.564128 10 27 10 C 26.435872 10 26 9.5641283 26 9 C 26 8.4358709 26.435871 8 27 8 z M 16 10.25 L 19.09375 16.4375 L 20.59375 16.8125 L 25.59375 13.25 L 24.1875 21 L 7.8125 21 L 6.40625 13.25 L 11.40625 16.8125 L 12.90625 16.4375 L 16 10.25 z M 8 23 L 24 23 L 24 25 L 8 25 L 8 23 z' />
	</svg>
);

export const ScoreSvg = ({ size = 15 }) => (
	<svg
		id='ScoreIcon'
		enableBackground='new 0 0 512.022 512.022'
		height={size}
		width={size}
		viewBox='0 0 512.022 512.022'
		xmlns='http://www.w3.org/2000/svg'>
		<g id='S_2_'>
			<path
				d='m466.911 352.6c0 63.498-42.336 161.744-210 159.38-217.11-1.61-207.32-179.22-211.8-188.48l123.3-11.7c4.43 9.76 1.29 87.7 88.5 89.95 1.28.03 2.58.05 3.9.05 29.4 0 79.2-10.2 79.2-48.9 0-2.1-.3-3.9-.6-5.4-4.8-24.6-43.8-32.1-82.5-41.4-.9-.3-1.5-.3-2.4-.6-80.4-19.5-190.2-45.9-190.2-160.2 0-66.6 49.8-145.3 189.9-145.3h2.7c168 1.2 192.3 103.3 195.9 148.9 0 3.3.3 6.6.3 9.3.3 7.5.3 12 .6 12.6l-124.8 5.4c-1.2-3-2.1-5.4-2.7-8.1-5.7-23.7-3.9-58.5-69.3-59.4-1.2-.3-2.4-.3-3.6-.3-23.1 0-66.6 6.6-66.6 30.6 0 19.8 30.6 29.7 70.2 39.6 6.6 1.5 13.5 3 20.7 4.8 101.4 23.7 189.3 52.8 189.3 169.2z'
				fill='#ffbe40'
			/>
			<g fill='#ff9f40'>
				<path d='m466.911 352.6c0 63.498-42.336 161.744-210 159.38v-110.23c1.28.03 2.58.05 3.9.05 29.4 0 79.2-10.2 79.2-48.9 0-2.1-.3-3.9-.6-5.4-4.8-24.6-43.8-32.1-82.5-41.4v-127.5c6.6 1.5 13.5 3 20.7 4.8 101.4 23.7 189.3 52.8 189.3 169.2z' />
				<path d='m453.711 170.799-124.799 5.4c-1.201-2.999-2.1-5.4-2.701-8.099-5.7-23.701-3.9-58.5-69.3-59.401v-108.699c167.999 1.199 192.299 103.299 195.901 148.9 0 3.3.298 6.599.298 9.3.301 7.5.301 12 .601 12.599z' />
			</g>
		</g>
	</svg>
);

export const HeartSvg = ({ size = 30 }) => (
	<svg
		id='Lives'
		enableBackground='new 0 0 512.007 512.007'
		height={`${size}%`}
		width={`${size}%`}
		viewBox='0 0 512.007 512.007'
		xmlns='http://www.w3.org/2000/svg'>
		<g>
			<g id='_x32_1_favorite'>
				<path
					d='m380.125 59.036c-59.77 0-109.664 42.249-121.469 98.51-.608 2.899-4.703 2.901-5.312 0-11.805-56.261-61.699-98.51-121.469-98.51-114.106 0-167.756 141.01-82.508 216.858l193.339 172.02c7.58 6.744 19.009 6.744 26.589 0l193.339-172.02c85.248-75.848 31.598-216.858-82.509-216.858z'
					fill='#fe646f'
				/>
				<g>
					<path
						d='m380.125 59.036c-6.912 0-13.689.572-20.293 1.658 99.376 15.991 141.363 144.168 61.527 215.2l-185.996 165.487 7.343 6.533c7.58 6.744 19.009 6.744 26.589 0l193.339-172.02c85.248-75.848 31.598-216.858-82.509-216.858z'
						fill='#fd4755'
					/>
				</g>
			</g>
			<g>
				<g id='_x32_1_favorite_2_'>
					<g>
						<path
							d='m380.125 59.036c-59.77 0-109.664 42.249-121.469 98.51-.608 2.899-4.703 2.901-5.312 0-11.805-56.261-61.699-98.51-121.469-98.51-114.106 0-167.756 141.01-82.508 216.858l193.339 172.02c7.58 6.744 19.009 6.744 26.589 0l193.339-172.02c85.248-75.848 31.598-216.858-82.509-216.858z'
							fill='#fe646f'
						/>
					</g>
					<g>
						<g>
							<path
								d='m380.125 59.036c-6.912 0-13.689.572-20.293 1.658 99.376 15.991 141.363 144.168 61.527 215.2l-185.996 165.487 7.343 6.533c7.58 6.744 19.009 6.744 26.589 0l193.339-172.02c85.248-75.848 31.598-216.858-82.509-216.858z'
								fill='#fd4755'
							/>
						</g>
					</g>
					<g>
						<path d='m237.72 453.517c-204.315-181.786-197.402-175.776-197.402-175.776-25.999-24.984-40.318-58.201-40.318-93.533 0-46.48 24.63-91.702 65.906-115.47 3.589-2.067 8.174-.833 10.242 2.757 2.067 3.589.833 8.175-2.757 10.242-36.017 20.74-58.391 60.004-58.391 102.471 0 31.212 12.683 60.588 35.711 82.717 0 0-6.881-5.996 196.979 175.386 2.292 2.039 5.242 3.161 8.309 3.161 3.066 0 6.018-1.123 8.31-3.162l61.917-55.089c3.095-2.753 7.835-2.477 10.588.618s2.477 7.835-.618 10.588l-61.917 55.09c-10.431 9.281-26.148 9.263-36.559 0zm119.643-76.458c-2.067 0-4.124-.849-5.606-2.515-2.753-3.095-2.477-7.835.618-10.588l105.273-93.665c21.815-19.409 35.132-44.369 38.513-72.181.001-.006.001-.012.002-.018 7.637-62.927-37.915-131.557-116.038-131.557-54.879 0-102.877 38.923-114.129 92.55-1.005 4.79-5.116 8.135-9.997 8.135s-8.991-3.346-9.996-8.136c-11.252-53.626-59.25-92.549-114.128-92.549-9.633 0-19.082 1.076-28.084 3.198-4.033.952-8.07-1.548-9.021-5.579-.951-4.032 1.547-8.07 5.579-9.021 10.128-2.388 20.735-3.598 31.525-3.598 55.699 0 105.463 35.109 124.125 87.792 18.71-52.817 68.567-87.792 124.125-87.792 84.905 0 139.884 74.56 130.929 148.362 0 .007-.001.015-.002.022-3.829 31.494-18.847 59.703-43.433 81.578l-105.273 93.665c-1.429 1.272-3.209 1.897-4.982 1.897z' />
					</g>
				</g>
			</g>
		</g>
	</svg>
);

export const KingSvg = ({ size = 40 }) => (
	<svg
		height={size}
		viewBox='0 -92 512 512'
		width={size}
		xmlns='http://www.w3.org/2000/svg'>
		<path
			d='m419.25 277.976562h-326.5c-4.988281 0-9.648438-2.464843-12.457031-6.585937-43.078125-63.171875-46.382813-184.691406-46.632813-202.730469-.015625-.707031-.023437-1.421875-.023437-2.132812 0-8.316406 6.734375-15.0625 15.050781-15.078125h.03125c8.300781 0 15.046875 6.714843 15.078125 15.019531 0 .101562.003906.992188.039063 2.570312 1.328124 42.902344 36.644531 77.390626 79.863281 77.390626 44.058593 0 79.902343-35.84375 79.902343-79.902344 0-8.328125 6.753907-15.078125 15.078126-15.078125h34.636718c8.328125 0 15.078125 6.75 15.078125 15.078125 0 44.058594 35.847657 79.902344 79.90625 79.902344 43.257813 0 78.597657-34.550782 79.867188-77.507813.027343-1.507813.035156-2.351563.035156-2.449219.03125-8.308594 6.773437-15.023437 15.078125-15.023437h.027344c8.316406.015625 15.050781 6.761719 15.050781 15.078125 0 .714844-.007813 1.425781-.019531 2.136718-.253906 18.035157-3.558594 139.558594-46.632813 202.730469-2.808593 4.117188-7.472656 6.582031-12.457031 6.582031zm0 0'
			fill='#fff780'
		/>
		<path
			d='m463.308594 51.449219c-.007813 0-.015625 0-.027344 0-8.300781 0-15.046875 6.714843-15.078125 15.019531 0 .101562-.003906.945312-.035156 2.453125-1.269531 42.953125-36.609375 77.507813-79.867188 77.507813-44.058593 0-79.902343-35.84375-79.902343-79.902344 0-8.328125-6.753907-15.078125-15.078126-15.078125h-17.316406v226.523437h163.246094c4.988281 0 9.648438-2.464844 12.457031-6.582031 43.078125-63.171875 46.382813-184.695313 46.632813-202.730469.015625-.707031.023437-1.421875.023437-2.132812-.003906-8.316406-6.738281-15.0625-15.054687-15.078125zm0 0'
			fill='#ffc02e'
		/>
		<path
			d='m256 0c-26.863281 0-48.71875 21.855469-48.71875 48.71875s21.855469 48.714844 48.71875 48.714844 48.71875-21.851563 48.71875-48.714844-21.855469-48.71875-48.71875-48.71875zm0 0'
			fill='#ffc02e'
		/>
		<path
			d='m256.003906 0v97.4375c26.863282-.003906 48.714844-21.855469 48.714844-48.71875s-21.855469-48.71484375-48.714844-48.71875zm0 0'
			fill='#ffa73b'
		/>
		<path
			d='m48.71875 37.597656c-26.863281 0-48.71875 21.855469-48.71875 48.71875 0 26.863282 21.855469 48.71875 48.71875 48.71875s48.714844-21.855468 48.714844-48.71875c0-26.863281-21.851563-48.71875-48.714844-48.71875zm0 0'
			fill='#ffc02e'
		/>
		<path
			d='m463.28125 37.597656c-26.863281 0-48.714844 21.855469-48.714844 48.71875 0 26.859375 21.851563 48.714844 48.714844 48.714844s48.71875-21.855469 48.71875-48.714844c0-26.863281-21.855469-48.71875-48.71875-48.71875zm0 0'
			fill='#ffa73b'
		/>
		<path
			d='m419.25 327.441406h-326.5c-8.328125 0-15.078125-6.75-15.078125-15.078125v-44.964843h356.65625v44.964843c0 8.328125-6.75 15.078125-15.078125 15.078125zm0 0'
			fill='#ffc02e'
		/>
		<path
			d='m256.003906 327.441406h163.246094c8.328125 0 15.078125-6.75 15.078125-15.078125v-44.964843h-178.324219zm0 0'
			fill='#ffa73b'
		/>
	</svg>
);
