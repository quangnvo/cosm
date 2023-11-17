import PricingPlans from '@/components/PricingPlans'

const Pricing = () => {
    return (
        <section className='container py-20'>

            <h2 className='text-3xl font-extrabold text-black sm:text-5xl'>
                Choose Your Adventure with Viet<span style={{ color: "#F85E9F" }}>wander</span>
            </h2>

            <p className='text-lg text-slate-500'>
                Unlock the full potential of your Vietnam exploration with our flexible pricing plans. Whether you're a casual explorer or a passionate wanderer, there's a plan designed just for you. Discover the beauty of Vietnam's hidden gems, explore its diverse landscapes, and create unforgettable travel experiences. Join Vietwander today and embark on your journey to easily explore the heart of Vietnam.
            </p>
            <PricingPlans />
        </section>
    )
}

export default Pricing