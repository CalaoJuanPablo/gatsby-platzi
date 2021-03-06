import React, {useState} from 'react'
import priceFormat from '../utils/priceFormat'
import {SEO} from './'
import {
	Tag,
	SizeButton,
	QtyButton,
	SizeSelect,
	Button,
	StyledProductDetail,
	QtySelect
} from '../styles/components'

export default function ProductDetail({price, id: sku, product}) {
	const [size, setSize] = useState(2)
	const [qty, setQty] = useState(1)
	const {
		id: prodId,
		name,
		metadata
	} = product
	const formatedPrice = priceFormat(price)

	return (
		<StyledProductDetail>
			<SEO title={name} />
			<img src={metadata.img} alt={name} />
			<div>
				<Tag>Popular</Tag>
				<h2>{name}</h2>
				<b>USD {formatedPrice}</b>
				{metadata.wear && (
					<SizeSelect selected={size}>
						<SizeButton onClick={() => setSize(1)}>XS</SizeButton>
						<SizeButton onClick={() => setSize(2)}>S</SizeButton>
						<SizeButton onClick={() => setSize(3)}>M</SizeButton>
						<SizeButton onClick={() => setSize(4)}>L</SizeButton>
					</SizeSelect>
				)}
				<p>Cantidad:</p>
				<QtySelect>
					<button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</button>
					<input type="text"  disabled value={qty} />
					<button onClick={() => setQty(qty + 1)}>+</button>
				</QtySelect>
			</div>
		</StyledProductDetail>
	)
}