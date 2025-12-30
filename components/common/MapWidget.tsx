export function MapWidget() {
    return (
        <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 relative group">
            {/* Loading placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-slate-100 animate-pulse">
                <div className="text-slate-400 text-sm font-medium">Loading map...</div>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.601569426573!2d80.2538912!3d12.9645011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d0063d01b15%3A0xd3b46ef54f649d67!2sECWC!5e0!3m2!1sen!2sin!4v1703830000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ECWC Location Map"
                className="relative z-10"
            ></iframe>
        </div>
    );
}
