"use client";

import React from 'react';
import { Activity, Shield, Clock, Bell, Server, ArrowRight, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

function App() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">
              Monitor Your Services with Confidence
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Real-time monitoring, instant alerts, and comprehensive insights for your web applications and APIs.
            </p>
            <div className="flex justify-center space-x-4">
              <button onClick={() => router.push('/dashboard')} className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                <span>Start Monitoring</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-gray-700 hover:border-emerald-500 px-6 py-3 rounded-lg transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gray-800/50" id="features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Powerful Monitoring Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Clock className="w-6 h-6 text-emerald-500" />}
                title="24/7 Monitoring"
                description="Continuous monitoring of your services with checks every 30 seconds"
              />
              <FeatureCard
                icon={<Bell className="w-6 h-6 text-emerald-500" />}
                title="Instant Alerts"
                description="Get notified immediately via email, Slack, or webhook when issues arise"
              />
              <FeatureCard
                icon={<Shield className="w-6 h-6 text-emerald-500" />}
                title="SSL Monitoring"
                description="Track SSL certificate expiration and security status"
              />
              <FeatureCard
                icon={<Server className="w-6 h-6 text-emerald-500" />}
                title="Global Checks"
                description="Monitor from multiple locations worldwide"
              />
              <FeatureCard
                icon={<Activity className="w-6 h-6 text-emerald-500" />}
                title="Uptime Reports"
                description="Detailed uptime reports and performance metrics"
              />
              <FeatureCard
                icon={<CheckCircle className="w-6 h-6 text-emerald-500" />}
                title="Status Pages"
                description="Beautiful public status pages for transparency"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-gray-800 rounded-lg">
                <div className="text-4xl font-bold text-emerald-500 mb-2">99.9%</div>
                <div className="text-gray-400">Uptime Guarantee</div>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg">
                <div className="text-4xl font-bold text-emerald-500 mb-2">5M+</div>
                <div className="text-gray-400">Checks Per Day</div>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg">
                <div className="text-4xl font-bold text-emerald-500 mb-2">30s</div>
                <div className="text-gray-400">Check Interval</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-900/50 to-blue-900/50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Monitoring?</h2>
            <p className="text-gray-400 mb-8">
              Join thousands of companies that trust UptimeGuard for their monitoring needs.
            </p>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Get Started Now
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Activity className="w-6 h-6 text-emerald-500" />
                <span className="text-xl font-bold">UptimeGuard</span>
              </div>
              <p className="text-gray-400">
                Reliable monitoring for modern web applications and services.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-500">Features</a></li>
                <li><a href="#" className="hover:text-emerald-500">Pricing</a></li>
                <li><a href="#" className="hover:text-emerald-500">API</a></li>
                <li><a href="#" className="hover:text-emerald-500">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-500">About</a></li>
                <li><a href="#" className="hover:text-emerald-500">Blog</a></li>
                <li><a href="#" className="hover:text-emerald-500">Careers</a></li>
                <li><a href="#" className="hover:text-emerald-500">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-500">Privacy</a></li>
                <li><a href="#" className="hover:text-emerald-500">Terms</a></li>
                <li><a href="#" className="hover:text-emerald-500">Security</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-800/80 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default App;