import React, { Component } from 'react';
class Footer extends Component {
    state = {  } 
    render() { 
        return ( <footer>
      <div className="grid grid-rows-1 grid-cols-4 h-100 w-screen px-16 gap-4 p-8 border border-black bg-[#1D5793]">
        <div className="p-8 col-span-1 row-span-1 border border-black">
          <h3 className="text-xl font-bold mb-4">City Admin</h3>
          <p className="text-medium hover:underline text-white">Your comprehensive city administration portal for all municipal services and information.</p>
        </div>
        <div className="p-8 col-span-1 row-span-1 border border-black">
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul className="space-y-2 list-inside list-none">
            <li className="text-medium hover:underline text-white">Public Transportation</li>
            <li className="text-medium hover:underline text-white">Property Tax</li>
            <li className="text-medium hover:underline text-white">Emergency Services</li>
            <li className="text-medium hover:underline text-white">Community Events</li>
          </ul>
        </div>
        <div className="p-8 col-span-1 row-span-1 border border-black">
          <h3 className="text-xl font-bold mb-4">Support</h3>
          <ul className="list-inside list-none space-y-2 text-justify">
            <li className="text-medium hover:underline text-white">Contact Us</li>
            <li className="text-medium hover:underline text-white">Help Center</li>
            <li className="text-medium hover:underline text-white">Report Issue</li>
            <li className="text-medium hover:underline text-white">Feedback</li>
          </ul>
        </div>
        <div className="p-8 col-span-1 row-span-1 border border-black">
          <h3 className="text-xl font-bold mb-4">connect</h3>
          <ul className="space-y-2 list-inside list-none">
            <li className="text-medium hover:underline text-white">linkedin</li>
            <li className="text-medium hover:underline text-white">facebook</li>
            <li className="text-medium hover:underline text-white">twitter</li>
            <li className="text-medium hover:underline text-white">telegram</li>
          </ul>
        </div>
      </div>
      <h2 className="text-whte">2025 City Administration. All rights reserved.</h2>

    </footer>);
    }
}
 
export default Footer;