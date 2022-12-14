import Head from 'next/head'
import Card from '../components/card'

const Home = () => {


  return (
    <>
    
      <div className="w-full">
        <Head>
          <title>Jamstack ECommerce</title>
          <meta name="description" content="Jamstack ECommerce Next provides a way to quickly get up and running with a fully configurable ECommerce site using Next.js." />
          <meta property="og:title" content="Jamstack ECommerce" key="title" />
        </Head>
        <div class="text-center bg-gray-50 text-gray-800 py-20 px-6">
        <h1 class="text-4xl font-bold mt-0 mb-6 font-style:Montserrat">Free Instagram Engagement Rate Calculator</h1>
        <p class="text-xl font-bold mt-0 mb-6 font-style:Montserrat">Try our free engagement  Rate Calculator to find out  the engagement  of any Instagram account</p>
       
        
<form class="flex items-center justify-center">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-2/4 flex items-center justify-center">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
    </div>
    <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-green-400 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       Check
        <span class="sr-only">Search</span>
    </button>
</form>
<div class="flex items-center m-3 justify-center">
<Card/>
<Card/>
<Card/>
</div>
</div>


       </div>
    </>
  )
}



export default Home