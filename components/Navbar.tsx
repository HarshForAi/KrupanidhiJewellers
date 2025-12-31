import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Settings, ChevronDown, Moon, Sun, Type as TypeIcon, Check, Monitor, Sparkles, Home, Layers, Users, Diamond, MapPin, ShieldCheck, PenTool, FileText, Lock, Heart, Star, Briefcase, Gem, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type FontStyle = 'Default' | 'Modern' | 'Elegant' | 'Classic' | 'Minimal' | 'Soft';
type ThemeMode = 'light' | 'dark' | 'system';

interface NavbarProps {
  currentView: 'home' | 'terms' | 'privacy' | 'care' | 'bespoke' | 'about' | 'materials';
  onHomeClick?: () => void;
  onTermsClick?: () => void;
  onPrivacyClick?: () => void;
  onCareClick?: () => void;
  onBespokeClick?: () => void;
  onAboutClick?: () => void;
  onMaterialsClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onHomeClick, onTermsClick, onPrivacyClick, onCareClick, onBespokeClick, onAboutClick, onMaterialsClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const settingsRef = useRef<HTMLDivElement>(null);
  
  const [themeMode, setThemeMode] = useState<ThemeMode>('system');
  const [isDark, setIsDark] = useState(true);
  const [textSize, setTextSize] = useState<'sm' | 'md'>('sm');
  const [fontStyle, setFontStyle] = useState<FontStyle>('Default');
  const [isFontDropdownOpen, setIsFontDropdownOpen] = useState(false);

  // Sync active link with view changes from parent
  useEffect(() => {
    if (currentView === 'home') {
      setActiveLink('Home');
    } else if (currentView === 'care') {
      setActiveLink('Care Guidelines');
    } else if (currentView === 'bespoke') {
      setActiveLink('Customization');
    } else if (currentView === 'about') {
      setActiveLink('About Us');
    } else if (currentView === 'materials') {
      setActiveLink('Materials');
    } else {
      setActiveLink(''); // No primary nav link active for Terms/Privacy
    }
  }, [currentView]);

  const closeSettings = () => {
    setIsSettingsOpen(false);
    setIsFontDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        closeSettings();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    
    document.documentElement.classList.add('text-size-sm');
    document.body.classList.remove('style-elegant', 'style-modern', 'style-classic', 'style-minimal', 'style-soft');

    return () => {
        window.removeEventListener('scroll', handleScroll);
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const applyTheme = () => {
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const shouldBeDark = themeMode === 'dark' || (themeMode === 'system' && isSystemDark);
      
      if (shouldBeDark) {
        document.documentElement.classList.add('dark');
        setIsDark(true);
      } else {
        document.documentElement.classList.remove('dark');
        setIsDark(false);
      }
    };

    applyTheme();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = () => {
        if (themeMode === 'system') applyTheme();
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, [themeMode]);

  const changeTextSize = (size: 'sm' | 'md') => {
    setTextSize(size);
    document.documentElement.classList.remove('text-size-sm', 'text-size-md', 'text-size-lg');
    document.documentElement.classList.add(`text-size-${size}`);
  };

  const changeFontStyle = (style: FontStyle) => {
    setFontStyle(style);
    setIsFontDropdownOpen(false);
    document.body.classList.remove('style-elegant', 'style-modern', 'style-classic', 'style-minimal', 'style-soft');
    if (style === 'Elegant') document.body.classList.add('style-elegant');
    if (style === 'Modern') document.body.classList.add('style-modern');
    if (style === 'Classic') document.body.classList.add('style-classic');
    if (style === 'Minimal') document.body.classList.add('style-minimal');
    if (style === 'Soft') document.body.classList.add('style-soft');
  };

  const handleHomeNavigation = (e: React.MouseEvent) => {
      e.preventDefault();
      if (onHomeClick) onHomeClick();
      // Immediate scroll to top to simulate "loading from top"
      window.scrollTo(0, 0);
      setActiveLink('Home');
      setIsMobileMenuOpen(false);
  };

  const handleAnchorClick = (id: string) => {
    if (currentView !== 'home' && onHomeClick) {
      onHomeClick();
    }
    
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    
    setIsMobileMenuOpen(false);
  };

  const toggleExpanded = (name: string) => {
    setExpandedItems(prev => 
      prev.includes(name) ? prev.filter(i => i !== name) : [...prev, name]
    );
  };

  const navLinks = [
    { name: 'Home', href: '#', icon: Home },
    { name: 'About Us', href: '#about', icon: Users },
    // Collection link removed as requested
    { name: 'Customization', href: '#bespoke', icon: PenTool },
    { name: 'Materials', href: '#materials', icon: Diamond },
    { name: 'Care Guidelines', href: '#care', icon: ShieldCheck, desktopNoIcon: true },
  ];

  const pillClasses = isScrolled 
    ? 'bg-white/70 dark:bg-neutral-900/80 border border-gold-200 dark:border-white/10 backdrop-blur-xl shadow-lg shadow-gold-500/5' 
    : 'bg-white/40 dark:bg-neutral-900/40 border border-white/20 dark:border-white/5 backdrop-blur-sm';

  const fontOptions: { name: FontStyle; family: string }[] = [
    { name: 'Default', family: "'Playfair Display', serif" },
    { name: 'Elegant', family: "'Bellota', cursive" },
    { name: 'Modern', family: "'Montserrat', sans-serif" },
    { name: 'Classic', family: "'Merriweather', serif" },
    { name: 'Minimal', family: "'DM Sans', sans-serif" },
    { name: 'Soft', family: "'Quicksand', sans-serif" }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-4' : 'py-8'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-12 items-center relative gap-2">
          <div className="col-span-3 lg:col-span-2 flex justify-start">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={handleHomeNavigation}
                className={`flex items-center gap-3 p-2 md:py-2 md:px-2 md:pr-6 rounded-full transition-all duration-300 cursor-pointer ${pillClasses}`}
            >
                <img 
                  src="/Logo/Krupanidhi.svg" 
                  alt="Krupanidhi" 
                  className="w-12 h-12 rounded-full object-cover shadow-sm bg-black/70 dark:bg-white/5"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/100/000000/FFFFFF?text=KJ';
                  }}
                />
                <div className="font-serif text-xl tracking-tight font-bold text-neutral-900 dark:text-white hidden md:block">
                    Krupanidhi
                </div>
            </motion.div>
          </div>

          <div className="col-span-6 lg:col-span-8 hidden lg:flex justify-center">
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center p-1.5 gap-1.5 rounded-full transition-all duration-300 ${pillClasses}`}
            >
              {navLinks.map((link) => (
                <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                        e.preventDefault();
                        if (link.name === 'Home') {
                            handleHomeNavigation(e);
                        } else if (link.name === 'Care Guidelines' && onCareClick) {
                            onCareClick();
                        } else if (link.name === 'Customization' && onBespokeClick) {
                            onBespokeClick();
                        } else if (link.name === 'About Us' && onAboutClick) {
                            onAboutClick();
                        } else if (link.name === 'Materials' && onMaterialsClick) {
                            onMaterialsClick();
                        } else {
                            setActiveLink(link.name);
                            if (link.href.startsWith('#')) handleAnchorClick(link.href.replace('#', ''));
                        }
                    }}
                    className={`
                        flex items-center gap-1.5 px-5 py-2.5 text-sm font-bold rounded-full transition-all duration-300 whitespace-nowrap
                        ${activeLink === link.name 
                            ? 'bg-neutral-900 dark:bg-gold-500 text-white shadow-md' 
                            : 'text-neutral-900 dark:text-white/80 hover:bg-gold-200/50 dark:hover:bg-white/10 hover:text-black dark:hover:text-white'
                        }
                    `}
                  >
                    {link.name}
                    {(link as any).hasDropdown && <ChevronDown className="w-3 h-3 opacity-60 ml-1 group-hover:rotate-180 transition-transform duration-300" />}
                  </a>

                  <AnimatePresence>
                    {(link as any).hasDropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 p-3 rounded-2xl bg-white/90 dark:bg-neutral-900/95 border border-gold-200 dark:border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden z-50"
                      >
                         <div className="flex flex-col gap-1">
                            {['New Arrivals', 'Best Sellers', 'Limited Edition', 'Gifts'].map((item) => (
                                <a key={item} href="#" className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-neutral-800 dark:text-white/80 hover:bg-gold-50 dark:hover:bg-white/10 hover:text-gold-600 dark:hover:text-gold-400 transition-colors group">
                                    {item}
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                </a>
                            ))}
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="col-span-9 lg:col-span-2 flex justify-end">
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`flex items-center gap-2 p-1.5 rounded-full transition-all duration-300 ${pillClasses}`}
            >
                <div className="relative" ref={settingsRef}>
                    <button 
                        onClick={() => {
                            if (isSettingsOpen) {
                                closeSettings();
                            } else {
                                setIsSettingsOpen(true);
                            }
                        }}
                        className={`
                            p-3 rounded-full transition-all duration-300 flex items-center gap-2 group
                            ${isSettingsOpen 
                                ? 'bg-neutral-900 text-white dark:bg-white/20 dark:text-white' 
                                : 'text-neutral-900 dark:text-white/80 hover:bg-gold-200/50 dark:hover:bg-white/10 hover:text-black dark:hover:text-white'
                            }
                        `}
                        aria-label="Settings"
                    >
                      <Settings className={`w-5 h-5 transition-transform duration-700 ${isSettingsOpen ? 'rotate-180' : 'group-hover:rotate-180'}`} />
                    </button>
                    
                    <AnimatePresence>
                        {isSettingsOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                                transition={{ type: "spring", bounce: 0.3 }}
                                className="absolute top-full right-[-1rem] sm:right-0 mt-4 w-[calc(100vw-2rem)] max-w-[300px] sm:w-80 max-h-[70vh] rounded-3xl bg-white/95 dark:bg-neutral-900/95 border border-gold-200 dark:border-white/10 shadow-2xl backdrop-blur-xl z-50 origin-top-right flex flex-col overflow-hidden"
                            >
                                <div className="flex items-center justify-between p-5 pb-2 shrink-0">
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400">Settings</h3>
                                    <button onClick={closeSettings} className="text-neutral-500 dark:text-white/40 hover:text-black dark:hover:text-white"><X className="w-4 h-4" /></button>
                                </div>
                                
                                <div className="overflow-y-auto thin-scrollbar p-5 pt-2 space-y-6 flex-1">
                                    <div className="space-y-2">
                                        <p className="text-[10px] text-neutral-400 dark:text-white/30 font-bold uppercase px-1">Appearance</p>
                                        <div className="flex bg-gold-50 dark:bg-white/5 p-1.5 rounded-xl gap-1">
                                            {[
                                                { mode: 'system', icon: Monitor, label: 'System' },
                                                { mode: 'light', icon: Sun, label: 'Light' },
                                                { mode: 'dark', icon: Moon, label: 'Dark' }
                                            ].map((item) => (
                                                <button
                                                    key={item.mode}
                                                    onClick={() => setThemeMode(item.mode as ThemeMode)}
                                                    className={`
                                                        flex-1 py-2.5 rounded-lg flex items-center justify-center transition-all duration-300
                                                        ${themeMode === item.mode 
                                                            ? 'bg-white dark:bg-neutral-800 shadow-sm text-gold-600 dark:text-white' 
                                                            : 'text-neutral-400 dark:text-white/40 hover:text-neutral-600 dark:hover:text-white/70'
                                                        }
                                                    `}
                                                >
                                                    <item.icon className="w-5 h-5" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                         <p className="text-[10px] text-neutral-400 dark:text-white/30 font-bold uppercase px-1">Typography</p>
                                         
                                         <div className="space-y-2">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 rounded-lg bg-neutral-200 dark:bg-white/10 text-neutral-600 dark:text-white/70">
                                                    <TypeIcon className="w-4 h-4" />
                                                </div>
                                                <span className="text-sm font-medium text-neutral-800 dark:text-white">Text Size</span>
                                            </div>
                                            <div className="flex bg-gold-50 dark:bg-white/5 p-1.5 rounded-xl gap-1">
                                                {[
                                                    { id: 'sm', label: 'Small' },
                                                    { id: 'md', label: 'Medium' }
                                                ].map((size) => (
                                                    <button
                                                        key={size.id}
                                                        onClick={() => changeTextSize(size.id as 'sm' | 'md')}
                                                        className={`
                                                            flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wide transition-all duration-300
                                                            ${textSize === size.id
                                                                ? 'bg-white dark:bg-neutral-800 shadow-sm text-gold-600 dark:text-white'
                                                                : 'text-neutral-400 dark:text-white/40 hover:text-neutral-600 dark:hover:text-white/70'
                                                            }
                                                        `}
                                                    >
                                                        {size.label}
                                                    </button>
                                                ))}
                                            </div>
                                         </div>

                                        <div className="relative">
                                            <button 
                                                onClick={() => setIsFontDropdownOpen(!isFontDropdownOpen)}
                                                className="w-full flex items-center justify-between p-3 rounded-xl bg-gold-50 dark:bg-white/5 hover:bg-gold-100 dark:hover:bg-white/10 transition-all text-neutral-800 dark:text-white group"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 rounded-lg bg-neutral-200 dark:bg-white/10 text-neutral-600 dark:text-white/70">
                                                        <TypeIcon className="w-4 h-4" />
                                                    </div>
                                                    <span className="text-sm font-medium">Font Style</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs text-gold-600 dark:text-gold-400 font-medium uppercase tracking-wider">{fontStyle}</span>
                                                    <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform ${isFontDropdownOpen ? 'rotate-180' : ''}`} />
                                                </div>
                                            </button>

                                            <AnimatePresence>
                                                {isFontDropdownOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -10, height: 0 }}
                                                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                                                        exit={{ opacity: 0, y: -10, height: 0 }}
                                                        className="overflow-hidden bg-white/50 dark:bg-black/20 rounded-xl mt-2 border border-gold-200 dark:border-white/5"
                                                    >
                                                        {fontOptions.map((option) => (
                                                            <button
                                                                key={option.name}
                                                                onClick={() => changeFontStyle(option.name)}
                                                                style={{ fontFamily: option.family }}
                                                                className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors ${
                                                                    fontStyle === option.name 
                                                                    ? 'bg-gold-200/50 dark:bg-white/10 text-neutral-900 dark:text-white font-semibold' 
                                                                    : 'text-neutral-600 dark:text-white/60 hover:bg-gold-100/50 dark:hover:bg-white/5'
                                                                }`}
                                                            >
                                                                {option.name}
                                                                {fontStyle === option.name && <Check className="w-3 h-3 text-gold-600 dark:text-gold-400" />}
                                                            </button>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                
                <button 
                    className="lg:hidden p-3 rounded-full text-neutral-700 dark:text-white hover:bg-gold-200/50 dark:hover:bg-white/10 transition-colors"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <Menu className="w-6 h-6" />
                </button>
            </motion.div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm lg:hidden"
            />
            
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 bottom-0 z-[70] w-[95%] max-w-[500px] bg-[#f8f8f8] dark:bg-neutral-950 flex flex-col rounded-l-[2.5rem] shadow-2xl overflow-hidden font-sans"
            >
                <div className="p-8 pb-4 flex items-center gap-3 shrink-0">
                    <Sparkles className="w-6 h-6 text-gold-600 dark:text-gold-400" />
                    <span className="text-2xl font-bold text-neutral-900 dark:text-white">Menu</span>
                </div>

                <div className="flex flex-1 overflow-hidden">
                    {/* Left Pane: Primary Navigation */}
                    <div className="w-1/2 p-4 space-y-2 overflow-y-auto thin-scrollbar">
                        {navLinks.map((link) => {
                            const isActive = activeLink === link.name;
                            const isExpanded = expandedItems.includes(link.name);
                            
                            return (
                                <div key={link.name} className="space-y-1.5 w-full">
                                    <button
                                        onClick={(e) => {
                                            if ((link as any).hasDropdown) {
                                                toggleExpanded(link.name);
                                            } else {
                                                if (link.name === 'Home') handleHomeNavigation(e as any);
                                                else if (link.name === 'Care Guidelines' && onCareClick) {
                                                    onCareClick();
                                                    setIsMobileMenuOpen(false);
                                                }
                                                else if (link.name === 'Customization' && onBespokeClick) {
                                                    onBespokeClick();
                                                    setIsMobileMenuOpen(false);
                                                }
                                                else if (link.name === 'About Us' && onAboutClick) {
                                                    onAboutClick();
                                                    setIsMobileMenuOpen(false);
                                                }
                                                else if (link.name === 'Materials' && onMaterialsClick) {
                                                    onMaterialsClick();
                                                    setIsMobileMenuOpen(false);
                                                }
                                                else {
                                                    setActiveLink(link.name);
                                                    if (link.href.startsWith('#')) handleAnchorClick(link.href.replace('#', ''));
                                                }
                                            }
                                        }}
                                        className={`w-full flex items-start gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 text-left ${
                                            isActive && !(link as any).hasDropdown
                                            ? 'bg-neutral-900 dark:bg-gold-500 text-white shadow-xl translate-x-1' 
                                            : 'text-neutral-600 dark:text-white/60 hover:bg-neutral-200 dark:hover:bg-white/5'
                                        }`}
                                    >
                                        <link.icon className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span className="text-[14px] font-bold leading-snug whitespace-normal break-words overflow-wrap-anywhere flex-1">
                                            {link.name}
                                        </span>
                                        {(link as any).hasDropdown && <ChevronDown className={`w-4 h-4 mt-0.5 ml-auto transition-transform shrink-0 ${isExpanded ? 'rotate-180' : ''}`} />}
                                    </button>

                                    <AnimatePresence>
                                      {(link as any).hasDropdown && isExpanded && (
                                          <motion.div 
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="pl-5 space-y-1.5 mt-1 overflow-hidden"
                                          >
                                              {[
                                                  { label: 'Diamond Rings', icon: Diamond },
                                                  { label: 'Gold Heritage', icon: Layers },
                                                  { label: 'Wedding Bands', icon: Heart }
                                              ].map((sub) => (
                                                  <button 
                                                    key={sub.label} 
                                                    className="w-full flex items-start gap-2.5 px-3 py-2.5 rounded-xl bg-white/60 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-all shadow-sm text-neutral-800 dark:text-white/80 border border-transparent hover:border-gold-200/50"
                                                  >
                                                      <sub.icon className="w-3.5 h-3.5 opacity-60 shrink-0 mt-0.5" />
                                                      <span className="text-xs font-bold whitespace-normal break-words overflow-wrap-anywhere flex-1">{sub.label}</span>
                                                  </button>
                                              ))}
                                          </motion.div>
                                      )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Pane: Support, Legal & Services */}
                    <div className="w-1/2 p-4 pt-1 bg-neutral-100/40 dark:bg-white/[0.01] border-l border-neutral-200 dark:border-white/10 overflow-y-auto thin-scrollbar">
                        <div className="space-y-8 pb-10">
                            {/* Support Section */}
                            <div className="space-y-2">
                                <div className="px-2 mb-3">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-white/30">Support</span>
                                </div>
                                <button 
                                  onClick={() => handleAnchorClick('contact')}
                                  className="w-full flex items-start gap-3 px-4 py-3 rounded-2xl hover:bg-neutral-200 dark:hover:bg-white/5 transition-all text-neutral-700 dark:text-white/70"
                                >
                                    <MapPin className="w-4 h-4 opacity-60 shrink-0 mt-0.5" />
                                    <span className="text-[13px] font-bold whitespace-normal break-words overflow-wrap-anywhere flex-1">Showrooms</span>
                                </button>
                                <button 
                                  onClick={() => { if (onCareClick) onCareClick(); setIsMobileMenuOpen(false); }}
                                  className="w-full flex items-start gap-3 px-4 py-3 rounded-2xl hover:bg-neutral-200 dark:hover:bg-white/5 transition-all text-neutral-700 dark:text-white/70"
                                >
                                    <ShieldCheck className="w-4 h-4 opacity-60 shrink-0 mt-0.5" />
                                    <span className="text-[13px] font-bold whitespace-normal break-words overflow-wrap-anywhere flex-1">Care Guide</span>
                                </button>
                            </div>

                            {/* Legal Section */}
                            <div className="space-y-2">
                                <div className="px-2 mb-3 flex items-center justify-between">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-white/30">Legal</span>
                                    <Star className="w-3.5 h-3.5 text-neutral-400 dark:text-white/30" />
                                </div>
                                {[
                                    { label: 'Terms & Conditions', icon: FileText, action: onTermsClick },
                                    { label: 'Privacy Policy', icon: Lock, action: onPrivacyClick }
                                ].map((item) => (
                                    <button 
                                      key={item.label} 
                                      onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        if (item.action) item.action();
                                      }}
                                      className="w-full flex items-start gap-3 px-4 py-3 rounded-2xl bg-white/40 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-all text-neutral-700 dark:text-white/70 shadow-sm border border-transparent hover:border-gold-200/50"
                                    >
                                        <item.icon className="w-4 h-4 opacity-60 shrink-0 mt-0.5" />
                                        <span className="text-[13px] font-bold whitespace-normal break-words overflow-wrap-anywhere flex-1">{item.label}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Services Section */}
                            <div className="space-y-2">
                                <div className="px-2 mb-3 flex items-center justify-between">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-white/30">Services</span>
                                    <Briefcase className="w-3.5 h-3.5 text-neutral-400 dark:text-white/30" />
                                </div>
                                {[
                                    { label: 'Bespoke Design', icon: PenTool, action: onBespokeClick },
                                    { label: 'Valuations', icon: Gem },
                                    { label: 'Book Visit', icon: Calendar }
                                ].map((item) => (
                                    <button 
                                      key={item.label} 
                                      onClick={() => {
                                        if (item.action) {
                                            item.action();
                                            setIsMobileMenuOpen(false);
                                        }
                                      }}
                                      className="w-full flex items-start gap-3 px-4 py-3 rounded-2xl bg-white/40 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-all text-neutral-700 dark:text-white/70 shadow-sm border border-transparent hover:border-gold-200/50"
                                    >
                                        <item.icon className="w-4 h-4 opacity-60 shrink-0 mt-0.5" />
                                        <span className="text-[13px] font-bold whitespace-normal break-words overflow-wrap-anywhere flex-1">{item.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bar: Settings Icon + X Button */}
                <div className="p-6 border-t border-neutral-200 dark:border-white/10 flex items-center justify-between bg-white/80 dark:bg-neutral-900/90 backdrop-blur-xl shrink-0">
                    <button 
                      onClick={() => {
                        setIsSettingsOpen(true);
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-3 group"
                    >
                        <div className="w-10 h-10 rounded-full bg-neutral-900 dark:bg-gold-500 flex items-center justify-center text-white group-hover:rotate-180 transition-transform duration-700">
                            <Settings className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-xs font-bold text-neutral-900 dark:text-white">Settings</span>
                            <span className="text-[10px] text-neutral-400 font-medium">Preferences</span>
                        </div>
                    </button>
                    <button 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-3 rounded-full bg-neutral-200 dark:bg-white/10 text-neutral-900 dark:text-white hover:bg-gold-200 dark:hover:bg-gold-500 transition-colors shadow-sm"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};