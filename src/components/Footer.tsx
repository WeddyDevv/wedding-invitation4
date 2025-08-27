const Footer = () => {
  return (
    <footer className="romantic-gradient py-12 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">♥</span>
              <span className="text-xl font-serif font-semibold text-primary">Wedding</span>
            </div>
            <p className="text-muted-foreground">
              Creating magical moments and unforgettable memories for your special day.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Wedding Planning</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Decoration</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Photography</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Catering</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 info@weddingceremony.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Wedding Street, Love City</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Wedding Ceremony. Made with ♥ for your special day.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;