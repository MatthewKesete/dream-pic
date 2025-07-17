import React, { useState } from 'react';
import { Camera, Play, Gift, Image, User, Phone, Briefcase, Calendar, MapPin, Star, Heart, Users, Award } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Camera },
    { id: 'live', label: 'Live', icon: Play },
    { id: 'gallery', label: 'See Photos', icon: Image },
    { id: 'gifts', label: 'Send a Gift', icon: Gift },
    { id: 'about', label: 'About Us', icon: User },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Phone },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Wedding Ceremony Live',
      date: 'Dec 15, 2024',
      time: '3:00 PM',
      location: 'Grand Ballroom',
      status: 'upcoming',
      thumbnail: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Corporate Event Live',
      date: 'Dec 18, 2024',
      time: '10:00 AM',
      location: 'Convention Center',
      status: 'upcoming',
      thumbnail: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Birthday Celebration',
      date: 'Dec 20, 2024',
      time: '6:00 PM',
      location: 'Private Venue',
      status: 'live',
      thumbnail: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const galleryCategories = [
    {
      id: 'weddings',
      title: 'Weddings',
      count: 156,
      thumbnail: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'corporate',
      title: 'Corporate Events',
      count: 89,
      thumbnail: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'portraits',
      title: 'Portraits',
      count: 234,
      thumbnail: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'events',
      title: 'Special Events',
      count: 178,
      thumbnail: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const giftOptions = [
    {
      id: 1,
      title: 'Digital Photo Package',
      description: 'High-resolution digital copies of event photos',
      price: '$49.99',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Premium Print Album',
      description: 'Professional photo album with custom design',
      price: '$149.99',
      image: 'https://images.pexels.com/photos/1084687/pexels-photo-1084687.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Video Highlight Reel',
      description: 'Professionally edited video highlights',
      price: '$99.99',
      image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Elegant Wedding at Sunset Villa',
      category: 'Wedding',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'A beautiful outdoor wedding celebration captured in golden hour light'
    },
    {
      id: 2,
      title: 'Corporate Summit 2024',
      category: 'Corporate',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Professional event coverage for a major corporate conference'
    },
    {
      id: 3,
      title: 'Family Portrait Session',
      category: 'Portrait',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Intimate family portraits in a natural outdoor setting'
    },
    {
      id: 4,
      title: 'Milestone Birthday Celebration',
      category: 'Event',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Joyful celebration of a special milestone birthday'
    }
  ];

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-yellow-400" />
            <span className="text-xl font-bold text-white">Dream Pictures</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-yellow-400 text-gray-900'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(./7R2A0490ccc.JPG)',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
            Capturing Life's
            <span className="text-yellow-400 block">Perfect Moments</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Professional photography and videography services for weddings, events, and special occasions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setActiveSection('portfolio')}
              className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
            >
              View Our Work
            </button>
            <button 
              onClick={() => setActiveSection('live')}
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-colors"
            >
              Watch Live Events
            </button>
          </div>
        </div>
      </div>

      {/* Live Events Section */}
      <div className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <Play className="inline h-8 w-8 text-yellow-400 mr-2" />
              Live Events
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't miss our upcoming live streams and broadcasts
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <img 
                    src={event.thumbnail} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  {event.status === 'live' && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>
                      LIVE
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-400 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {event.date} at {event.time}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {event.location}
                  </div>
                  <button 
                    onClick={() => setActiveSection('live')}
                    className="w-full bg-yellow-400 text-gray-900 py-2 rounded-md font-semibold hover:bg-yellow-300 transition-colors"
                  >
                    {event.status === 'live' ? 'Watch Live' : 'Set Reminder'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Dream Pictures?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We bring your vision to life with professional expertise and artistic flair
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <Award className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Award-Winning Quality</h3>
              <p className="text-gray-400">Professional equipment and years of experience delivering exceptional results</p>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <Users className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
              <p className="text-gray-400">Tailored approach to meet your unique needs and vision</p>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <Heart className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Passionate Craftsmanship</h3>
              <p className="text-gray-400">Every shot is crafted with love and attention to detail</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const LivePage = () => (
    <div className="min-h-screen bg-gray-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Live Streaming</h1>
          <p className="text-gray-400">Watch our live events and broadcasts</p>
        </div>
        
        <div className="mb-12">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-red-600 rounded-full mr-2 animate-pulse"></div>
              <span className="text-red-600 font-semibold">LIVE NOW</span>
            </div>
            <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <Play className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                <p className="text-gray-400">Live stream will appear here</p>
                <p className="text-sm text-gray-500">YouTube Live integration</p>
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Birthday Celebration Live Stream</h2>
            <p className="text-gray-400 mb-4">Join us for this special celebration with family and friends</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-400">👁️ 234 viewers</span>
                <span className="text-sm text-gray-400">💬 12 comments</span>
              </div>
              <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 transition-colors">
                Share Stream
              </button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Upcoming Streams</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.filter(event => event.status === 'upcoming').map((event) => (
              <div key={event.id} className="bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  src={event.thumbnail} 
                  alt={event.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-400 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {event.date} at {event.time}
                  </div>
                  <button className="w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-600 transition-colors">
                    Set Reminder
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const GalleryPage = () => (
    <div className="min-h-screen bg-gray-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-gray-400">Explore our collection of captured moments</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryCategories.map((category) => (
            <div key={category.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="relative">
                <img 
                  src={category.thumbnail} 
                  alt={category.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span className="text-white font-semibold">View Gallery</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-400 text-sm">{category.count} photos</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Recent Photos</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="aspect-square bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img 
                  src={`https://images.pexels.com/photos/${1444442 + index}/pexels-photo-${1444442 + index}.jpeg?auto=compress&cs=tinysrgb&w=400`}
                  alt={`Gallery photo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const GiftsPage = () => (
    <div className="min-h-screen bg-gray-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Send a Gift</h1>
          <p className="text-gray-400">Share memories with beautiful photo products and donations</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Gift Products</h2>
            <div className="space-y-4">
              {giftOptions.map((gift) => (
                <div key={gift.id} className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                  <img 
                    src={gift.image} 
                    alt={gift.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{gift.title}</h3>
                    <p className="text-gray-400 text-sm">{gift.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-yellow-400 font-semibold">{gift.price}</div>
                    <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md text-sm font-semibold hover:bg-yellow-300 transition-colors mt-2">
                      Send Gift
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Send a Donation</h2>
            <p className="text-gray-400 mb-6">Support our work with a monetary donation</p>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                {['$25', '$50', '$100'].map((amount) => (
                  <button 
                    key={amount}
                    className="bg-gray-700 text-white py-3 rounded-md font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-colors"
                  >
                    {amount}
                  </button>
                ))}
              </div>
              <div className="flex space-x-4">
                <input 
                  type="number" 
                  placeholder="Custom amount"
                  className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-md font-semibold hover:bg-yellow-300 transition-colors">
                  Donate
                </button>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium mb-2">Add a message (optional)</label>
                <textarea 
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  rows={3}
                  placeholder="Your message here..."
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen bg-gray-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Dream Pictures</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We are passionate storytellers dedicated to capturing life's most precious moments
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-400 mb-4">
              Founded in 2015, Dream Pictures has been at the forefront of photography and videography, 
              capturing thousands of special moments for families and businesses alike.
            </p>
            <p className="text-gray-400 mb-6">
              Our team of skilled photographers and videographers combines technical expertise with 
              artistic vision to create stunning visual narratives that tell your unique story.
            </p>
            <div className="flex space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-gray-400">Events Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">10k+</div>
                <div className="text-gray-400">Photos Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">8</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Our team"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-800 rounded-lg">
            <Camera className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Professional Equipment</h3>
            <p className="text-gray-400">State-of-the-art cameras and lighting equipment for the best results</p>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-lg">
            <Users className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
            <p className="text-gray-400">Skilled professionals with years of experience in photography and videography</p>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-lg">
            <Heart className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Passion for Excellence</h3>
            <p className="text-gray-400">We pour our heart into every project to deliver exceptional results</p>
          </div>
        </div>
      </div>
    </div>
  );

  const PortfolioPage = () => (
    <div className="min-h-screen bg-gray-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-gray-400">Showcasing our finest work across various events and occasions</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded text-sm font-semibold">
                    {item.category}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 transition-colors">
                  View Full Gallery
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen bg-gray-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-400">Ready to capture your special moments? Let's talk!</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-yellow-400" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-400">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <svg className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-400">info@dreampictures.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-yellow-400" />
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-gray-400">123 Photography Lane<br />Studio City, CA 91604</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name"
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input 
                  type="text" 
                  placeholder="Last Name"
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input 
                type="tel" 
                placeholder="Phone Number"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <select className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option>Select Service</option>
                <option>Wedding Photography</option>
                <option>Event Coverage</option>
                <option>Portrait Session</option>
                <option>Corporate Events</option>
                <option>Live Streaming</option>
              </select>
              <textarea 
                placeholder="Tell us about your event..."
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                rows={4}
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-yellow-400 text-gray-900 py-3 rounded-md font-semibold hover:bg-yellow-300 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage />;
      case 'live':
        return <LivePage />;
      case 'gallery':
        return <GalleryPage />;
      case 'gifts':
        return <GiftsPage />;
      case 'about':
        return <AboutPage />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      {renderActiveSection()}
    </div>
  );
};

export default App;