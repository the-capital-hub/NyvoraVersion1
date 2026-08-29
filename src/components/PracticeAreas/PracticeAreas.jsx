import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./PracticeAreas.css";

const areas = [
  [
    "01",
    "Civil Law",
    "civil",
    "Civil disputes, recovery, injunction, declaration, specific performance, partition, possession, contractual disputes and litigation support.",
    "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&w=1200&q=88",
  ],

  [
    "02",
    "Criminal Law",
    "criminal",
    "Criminal complaints, bail, anticipatory bail, regular bail, criminal proceedings, defence assistance and litigation support.",
    "https://static.wixstatic.com/media/c74dd1_c9e83dbe0a594c0dbe2212b883c4f0ff~mv2.png/v1/fill/w_936%2Ch_624%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/c74dd1_c9e83dbe0a594c0dbe2212b883c4f0ff~mv2.png",
  ],

  [
    "03",
    "Family Law",
    "family",
    "Divorce, maintenance, custody and guardianship, domestic disputes, succession, inheritance, settlements and family notices.",
    "https://fulcrumfl.com.au/family-law.jpg",
  ],

  [
    "04",
    "High Court Matters",
    "high-court",
    "Legal consultation, drafting, writ-related matters, civil and criminal proceedings, appeals, revisions, research and litigation support.",
    "https://framerusercontent.com/images/b7UQdCkhGVscB8Yz8X2B3QwBDCs.png",
  ],

  [
    "05",
    "Property & Real Estate Law",
    "property",
    "Residential and commercial property transactions, documentation, disputes, ownership and possession-related matters.",
    "https://www.bryshunmace.com/wp-content/uploads/2025/04/Real-Estate-Law-Kelowna.png",
  ],

  [
    "06",
    "Property Title Verification",
    "title-verification",
    "Examination of title flow, ownership, encumbrances, revenue records and supporting property documents.",
    "https://certificateoftitle.nz/cdn/shop/articles/conveyancing-title-search-guide-nz-solicitors.png?v=1772921545&width=2000",
  ],

  [
    "07",
    "Legal Scrutiny & Due Diligence",
    "legal-scrutiny",
    "Document collection, title examination, ownership review, records verification, issue identification and legal observations.",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=88",
  ],

  [
    "08",
    "Sale Deed & Document Drafting",
    "legal-drafting",
    "Sale deeds, agreements, gift, partition, release, settlement, rectification, confirmation deeds and related documents.",
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=88",
  ],

  [
    "09",
    "Civil Litigation",
    "civil-litigation",
    "Assistance with civil proceedings, pleadings, legal notices, disputes and other litigation-related requirements.",
    "https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/09ddd8ab-bc06-4afe-a02b-6758ab912441/00a27309-63cb-4578-9c3c-d222b2a227c5.png",
  ],

  [
    "10",
    "Legal Notices",
    "legal-notices",
    "Notices concerning property disputes, recovery, breach of contract, dues, tenancy, possession, family and commercial disputes.",
    "https://rerafiling.com/upload/articles/articles_1897329205.png",
  ],

  [
    "11",
    "Agreements & Contracts",
    "agreements-contracts",
    "Agreement drafting and review, contracts, leases, rent agreements, construction and other commercial documentation.",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=88",
  ],

  [
    "12",
    "Corporate & Commercial Legal Matters",
    "corporate-commercial",
    "Agreement and contract review, vendor and service agreements, employment documentation, NDAs, MoUs, partnerships and commercial disputes.",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=88",
  ],
];

export { areas };

export default function PracticeAreas() {
  return (
    <section className="practice">

      {/* =====================================================
          BACKGROUND DETAIL
      ===================================================== */}

      <div className="practice-bg-detail">

        <span className="detail-circle" />

        <span className="detail-line detail-line-one" />

        <span className="detail-line detail-line-two" />

        <span className="detail-mark">
          NEEM LEGAL · 03
        </span>

      </div>


      <div className="container practice-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="practice-header"
          initial={{
            opacity: 0,
            y: 22,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >

          <div className="practice-heading">

            <div className="practice-eyebrow">
              <span />
              <p>Areas of Practice</p>
            </div>

            <h2>
              Professional legal
              <br />
              <em>assistance.</em>
            </h2>

          </div>


          <div className="practice-intro-copy">

            <span className="practice-section-number">
              03
            </span>

            <p>
              Our services cover civil, criminal, family, High Court,
              property, documentation, litigation, notices, agreements
              and corporate/commercial legal matters.
            </p>

            <div className="practice-india">

              <span>●</span>

              <strong>
                Bengaluru · Karnataka
              </strong>

            </div>

          </div>

        </motion.div>


        {/* =================================================
            PRACTICE LIST
        ================================================= */}

        <div className="practice-list">

          {areas.map((area, index) => {

            const [
              number,
              title,
              slug,
              description,
              image,
            ] = area;

            return (
              <motion.div
                key={slug}
                className="practice-item"
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  delay: index * 0.03,
                  duration: 0.45,
                }}
              >

                <Link
                  className="practice-card"
                  to={`/practice-areas/${slug}`}
                >

                  {/* NUMBER */}

                  <div className="practice-number">

                    <span>
                      {number}
                    </span>

                    <i />

                  </div>


                  {/* INFORMATION */}

                  <div className="practice-info">

                    <div className="practice-title-row">

                      <h3>
                        {title}
                      </h3>

                      <span className="practice-mobile-arrow">
                        ↗
                      </span>

                    </div>


                    <p>
                      {description}
                    </p>


                    <span className="practice-explore">

                      View Details

                      <b>
                        ↗
                      </b>

                    </span>

                  </div>


                  {/* IMAGE */}

                  <div className="practice-image">

                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                    />

                    <div className="practice-image-overlay" />

                    <span className="practice-image-label">
                      {number} / 12
                    </span>

                    <span className="practice-image-arrow">
                      ↗
                    </span>

                  </div>

                </Link>

              </motion.div>
            );
          })}

        </div>


        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="practice-footer">

          <span>
            12 areas of practice · One professional approach.
          </span>

          <Link to="/practice-areas">
            View all services ↗
          </Link>

        </div>

      </div>

    </section>
  );
}