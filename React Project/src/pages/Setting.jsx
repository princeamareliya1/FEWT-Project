import React, { useState } from 'react';

export default function Setting() {
  // 1. Manage active tab with React state
  const [activeTab, setActiveTab] = useState('account');

  return (
    <div>
      <div className="container-fluid px-md-5 px-4 my-5 flex-grow-1" style={{ paddingTop: '50px' }}>
        <div className="row mb-4">
          <div className="col-12">
            <h1 className="display-5 fw-bold mb-1" style={{ letterSpacing: '-1px' }}>Account Settings</h1>
            <p style={{ color: 'var(--text-muted)' }}>Manage your Cyber Cinematic preferences and profile details.</p>
          </div>
        </div>

        <div className="row g-4">
          
          <div className="col-lg-3 col-md-4">
            <div className="cyber-card p-2">
              <div className="nav flex-column nav-pills settings-nav">
                <button 
                  className={`nav-link ${activeTab === 'account' ? 'active' : ''}`}
                  onClick={() => setActiveTab('account')}
                  type="button"
                >
                  <i className="bi bi-person-circle fs-5 me-2"></i> Public Profile
                </button>
                <button 
                  className={`nav-link ${activeTab === 'security' ? 'active' : ''}`}
                  onClick={() => setActiveTab('security')}
                  type="button"
                >
                  <i className="bi bi-shield-lock fs-5 me-2"></i> Security & Password
                </button>
                <button 
                  className={`nav-link ${activeTab === 'preferences' ? 'active' : ''}`}
                  onClick={() => setActiveTab('preferences')}
                  type="button"
                >
                  <i className="bi bi-sliders fs-5 me-2"></i> Viewing Preferences
                </button>
                <button 
                  className={`nav-link ${activeTab === 'notifications' ? 'active' : ''}`}
                  onClick={() => setActiveTab('notifications')}
                  type="button"
                >
                  <i className="bi bi-bell fs-5 me-2"></i> Notifications
                </button>
              </div>
            </div>
          </div>

          
          <div className="col-lg-9 col-md-8">
            <div className="tab-content">
              
              
              {activeTab === 'account' && (
                <div className="tab-pane fade show active">
                  <div className="cyber-card">
                    <h3 className="section-title">Public Profile</h3>
                    
                    <div className="avatar-upload mb-4">
                      <img src="https://i.pravatar.cc/150?img=33" alt="Avatar Preview" />
                      <button className="avatar-edit-btn" title="Change Avatar" type="button">
                        <i className="bi bi-camera-fill"></i>
                      </button>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="row g-4 mb-4">
                        <div className="col-md-6">
                          <label className="form-label">Display Name</label>
                          <input type="text" className="form-control" defaultValue="Cinematic Maverick" />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Username</label>
                          <div className="input-group">
                            <span className="input-group-text" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>@</span>
                            <input type="text" className="form-control" defaultValue="cinema_maverick" />
                          </div>
                        </div>
                        <div className="col-12">
                          <label className="form-label">Email Address</label>
                          <input type="email" className="form-control" defaultValue="maverick@example.com" />
                        </div>
                        <div className="col-12">
                          <label className="form-label">Bio</label>
                          <textarea className="form-control" rows="4" defaultValue="Sci-Fi enthusiast and practical effects appreciator. Looking for the perfect cyberpunk aesthetic."></textarea>
                        </div>
                      </div>
                      <div className="d-flex gap-3 mt-4">
                        <button type="submit" className="btn btn-premium">Save Changes</button>
                        <button type="button" className="btn btn-outline-cyber">Cancel</button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              
              {activeTab === 'security' && (
                <div className="tab-pane fade show active">
                  <div className="cyber-card">
                    <h3 className="section-title" style={{ borderColor: 'var(--primary-neon)' }}>Security & Password</h3>
                    
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="row g-4 mb-5">
                        <div className="col-12">
                          <label className="form-label">Current Password</label>
                          <input type="password" className="form-control" placeholder="••••••••" />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">New Password</label>
                          <input type="password" className="form-control" placeholder="Create new password" />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Confirm New Password</label>
                          <input type="password" className="form-control" placeholder="Confirm new password" />
                        </div>
                        <div className="col-12 mt-4">
                          <button type="submit" className="btn btn-premium">Update Password</button>
                        </div>
                      </div>

                      <hr style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '30px 0' }} />

                      <h5 className="fw-bold mb-3">Two-Factor Authentication (2FA)</h5>
                      <p className="small" style={{ color: 'var(--text-muted)' }}>Add an extra layer of security to your account.</p>
                      
                      <div className="form-check form-switch cyber-switch d-flex align-items-center gap-3 ps-0 mt-3">
                        <input className="form-check-input m-0" type="checkbox" id="2faToggle" />
                        <label className="form-check-label text-white fw-bold" htmlFor="2faToggle">Enable 2FA via Authenticator App</label>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              
              {activeTab === 'preferences' && (
                <div className="tab-pane fade show active">
                  <div className="cyber-card">
                    <h3 className="section-title">Viewing Preferences</h3>
                    
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="row g-4 mb-4">
                        <div className="col-md-6">
                          <label className="form-label">Default Watchlist Sort</label>
                          <select className="form-select" defaultValue="recent">
                            <option value="recent">Recently Added (Default)</option>
                            <option value="rating">Highest Rating</option>
                            <option value="release">Release Date</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Preferred Content Rating</label>
                          <select className="form-select" defaultValue="all">
                            <option value="all">Show All Content</option>
                            <option value="pg13">Filter R-Rated</option>
                            <option value="family">Family Friendly Only</option>
                          </select>
                        </div>
                        <div className="col-12 mt-4">
                          <h5 className="fw-bold mb-3">Data & Privacy</h5>
                          <div className="form-check form-switch cyber-switch d-flex align-items-center gap-3 ps-0 mb-3">
                            <input className="form-check-input m-0" type="checkbox" id="publicProfile" defaultChecked />
                            <label className="form-check-label text-white" htmlFor="publicProfile">Make my profile and watchlists public</label>
                          </div>
                          <div className="form-check form-switch cyber-switch d-flex align-items-center gap-3 ps-0">
                            <input className="form-check-input m-0" type="checkbox" id="activityFeed" defaultChecked />
                            <label className="form-check-label text-white" htmlFor="activityFeed">Show my viewing activity on community feeds</label>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex gap-3 mt-4">
                        <button type="submit" className="btn btn-premium">Save Preferences</button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              
              {activeTab === 'notifications' && (
                <div className="tab-pane fade show active">
                  <div className="cyber-card">
                    <h3 className="section-title">Notification Settings</h3>
                    
                    <div className="d-flex flex-column gap-4 mt-4">
                      <div className="d-flex justify-content-between align-items-center border-bottom pb-3" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                        <div>
                          <h6 className="fw-bold mb-1">New Releases</h6>
                          <p className="small mb-0" style={{ color: 'var(--text-muted)' }}>Get notified when movies on your watchlist are released.</p>
                        </div>
                        <div className="form-check form-switch cyber-switch ps-0">
                          <input className="form-check-input m-0" type="checkbox" defaultChecked />
                        </div>
                      </div>

                      <div className="d-flex justify-content-between align-items-center border-bottom pb-3" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                        <div>
                          <h6 className="fw-bold mb-1">Community Interactions</h6>
                          <p className="small mb-0" style={{ color: 'var(--text-muted)' }}>Alerts for likes and comments on your reviews.</p>
                        </div>
                        <div className="form-check form-switch cyber-switch ps-0">
                          <input className="form-check-input m-0" type="checkbox" defaultChecked />
                        </div>
                      </div>

                      <div className="d-flex justify-content-between align-items-center border-bottom pb-3" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                        <div>
                          <h6 className="fw-bold mb-1">Weekly Newsletter</h6>
                          <p className="small mb-0" style={{ color: 'var(--text-muted)' }}>Top curated cinematic news and trending talent directly to your email.</p>
                        </div>
                        <div className="form-check form-switch cyber-switch ps-0">
                          <input className="form-check-input m-0" type="checkbox" />
                        </div>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="fw-bold mb-1 text-danger">Security Alerts</h6>
                          <p className="small mb-0" style={{ color: 'var(--text-muted)' }}>Critical notifications about logins and account changes. (Cannot be disabled)</p>
                        </div>
                        <div className="form-check form-switch cyber-switch ps-0">
                          <input className="form-check-input m-0" type="checkbox" defaultChecked disabled style={{ opacity: 0.5 }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}