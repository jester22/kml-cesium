import { Viewer, KmlDataSource, Clock } from "resium";
import { JulianDate, ClockStep } from "cesium";

const data = new DOMParser().parseFromString(
  `<?xml version="1.0" encoding="UTF-8"?><kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
  <name>Lutjanus_argentimaculatus_1662526051.kml</name><Style id="Fishes"><BalloonStyle><text><![CDATA[<table><tr><td><b>Country</b></td><td>$[Country]</td></tr><tr><td><b>Year Collected</b></td><td>$[YearCollected]</td></tr><tr><td><b>Collector</b></td><td>$[Collector]</td></tr><tr><td><b>Locality</b></td><td>$[Locality]</td></tr><tr><td><b>Url</b></td><td>$[Url]</td></tr><tr><td><b>Catalog No.</b></td><td>$[CatalogNum]</td></tr></table>]]></text><bgColor>#ff673005</bgColor><textColor>#ffffffff</textColor></BalloonStyle><IconStyle><Icon><href>/images/red.png</href></Icon></IconStyle></Style><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>0.833333,4.950000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354748">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354748</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>22.440000,22.440000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Da-pon-wan, Pingtung, Taiwan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218800951">http://data.gbif.org/ws/rest/occurrence/get/218800951</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[2117]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>22.440000,22.440000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Da-pon-wan, Pingtung, Taiwan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218800956">http://data.gbif.org/ws/rest/occurrence/get/218800956</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[2148]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>22.480000,22.480000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Pintung, Taiwan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218800948">http://data.gbif.org/ws/rest/occurrence/get/218800948</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[1999]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>22.750000,22.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1982]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Lu-dao, Taitung, Taiwan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218800938">http://data.gbif.org/ws/rest/occurrence/get/218800938</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[1869]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>23.130000,23.130000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1965]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tainan, Taiwan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218800962">http://data.gbif.org/ws/rest/occurrence/get/218800962</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[4358]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>23.570000,23.570000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1957]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Penhow, Taiwan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218800965">http://data.gbif.org/ws/rest/occurrence/get/218800965</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[4953]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>24.450000,24.450000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Ci Lake, Kingmen, Taiwan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218800941">http://data.gbif.org/ws/rest/occurrence/get/218800941</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[1994]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>24.916666,-34.016666</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Jeffreys Bay]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851838">http://data.gbif.org/ws/rest/occurrence/get/197851838</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[RUSI 11162]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>24.916666,-34.016666</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1979]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Jeffreys Bay]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347409">http://data.gbif.org/ws/rest/occurrence/get/193347409</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[11162]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>24.916700,-34.016700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1979]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-011186]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>24.916700,-34.016700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1979]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Jeffreys Bay]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24897860">http://data.gbif.org/ws/rest/occurrence/get/24897860</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-011186]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>25.600000,-33.966667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Port Elizabeth - North End]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347427">http://data.gbif.org/ws/rest/occurrence/get/193347427</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[32175]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>25.600000,-33.966667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Port Elizabeth - North End]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851846">http://data.gbif.org/ws/rest/occurrence/get/197851846</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[RUSI 32175]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>25.600000,-33.966700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Port Elizabeth - North End]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24898037">http://data.gbif.org/ws/rest/occurrence/get/24898037</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-022171]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>25.600000,-33.966700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1989]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-022171]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>25.633300,-33.866700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-012855]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>25.633300,-33.866700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Swartkops River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24897871">http://data.gbif.org/ws/rest/occurrence/get/24897871</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-012855]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>25.633300,-33.866700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1982]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-016364]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>25.633300,-33.866700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1982]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Swartkops River mouth]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24897935">http://data.gbif.org/ws/rest/occurrence/get/24897935</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-016364]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>25.633333,-33.866665</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Swartkops River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851839">http://data.gbif.org/ws/rest/occurrence/get/197851839</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[RUSI 12870]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>25.633333,-33.866665</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Swartkops River mouth]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851843">http://data.gbif.org/ws/rest/occurrence/get/197851843</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[RUSI 16103]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>25.633333,-33.866665</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Swartkops River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347410">http://data.gbif.org/ws/rest/occurrence/get/193347410</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[12870]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>25.633333,-33.866665</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1982]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Swartkops River mouth]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347136">http://data.gbif.org/ws/rest/occurrence/get/193347136</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[16103]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>26.674100,-33.691400</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1993]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Kenton-on-Sea]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/80917580">http://data.gbif.org/ws/rest/occurrence/get/80917580</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1213630]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>26.683300,-33.683300</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1963]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-012901]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>26.683300,-33.683300</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1963]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Kariega]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24897874">http://data.gbif.org/ws/rest/occurrence/get/24897874</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-012901]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>26.683332,-33.683334</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Kariega]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851840">http://data.gbif.org/ws/rest/occurrence/get/197851840</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[RUSI 12939]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>26.683332,-33.683334</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1963]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Kariega]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347412">http://data.gbif.org/ws/rest/occurrence/get/193347412</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[12939]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>27.583300,-33.216700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1983]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-018644]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>27.583300,-33.216700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1983]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Chalumna River estuary]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24897990">http://data.gbif.org/ws/rest/occurrence/get/24897990</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-018644]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>27.583334,-33.216667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Chalumna River estuary]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851844">http://data.gbif.org/ws/rest/occurrence/get/197851844</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[RUSI 18208]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>27.583334,-33.216667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1983]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Chalumna River estuary]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347149">http://data.gbif.org/ws/rest/occurrence/get/193347149</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[18208]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>28.083334,-32.900000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Kwelera estuary, 1km from mouth]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851841">http://data.gbif.org/ws/rest/occurrence/get/197851841</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[RUSI 14619]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>28.083334,-32.900002</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1981]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Kwelera estuary, 1km from mouth]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347420">http://data.gbif.org/ws/rest/occurrence/get/193347420</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[14619]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>29.000000,-32.150000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Xora River mouth]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851864">http://data.gbif.org/ws/rest/occurrence/get/197851864</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[RUSI 49801]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>29.000000,-32.150000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1975]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-035696]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>29.000000,-32.150000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1975]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Xora River mouth]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24898348">http://data.gbif.org/ws/rest/occurrence/get/24898348</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-035696]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>29.000000,-32.150002</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1975]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Xora River mouth]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347325">http://data.gbif.org/ws/rest/occurrence/get/193347325</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[49801]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>29.150000,-31.966700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Coffee bay,Transkei.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24955872">http://data.gbif.org/ws/rest/occurrence/get/24955872</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAMC-MBF-002514]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>29.150000,-31.966700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[0]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAMC-MBF-002514]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>29.411100,-31.689501</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2006]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Umgazana]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347454">http://data.gbif.org/ws/rest/occurrence/get/193347454</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[78275]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>29.423334,-31.691389</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Mngazana]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347492">http://data.gbif.org/ws/rest/occurrence/get/193347492</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[74844]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.134100,-31.152300</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1988]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Myameni]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/25858348">http://data.gbif.org/ws/rest/occurrence/get/25858348</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-459166]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.184200,-31.090600</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1993]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Mtentwana River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/80919124">http://data.gbif.org/ws/rest/occurrence/get/80919124</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1269822]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.306200,-30.941300</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1992]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Marina Beach]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/80800733">http://data.gbif.org/ws/rest/occurrence/get/80800733</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1155542]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.412900,-30.806700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1988]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Shelly Beach]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/25942379">http://data.gbif.org/ws/rest/occurrence/get/25942379</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-495455]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.412900,-30.806700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1992]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Shelly Beach]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/80805364">http://data.gbif.org/ws/rest/occurrence/get/80805364</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1190669]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.412900,-30.806700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1992]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Shelly Beach]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/80805621">http://data.gbif.org/ws/rest/occurrence/get/80805621</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1192041]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.412900,-30.806700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Shelly Beach]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/27561757">http://data.gbif.org/ws/rest/occurrence/get/27561757</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1625177]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.416666,-30.783333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Zotsha]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851862">http://data.gbif.org/ws/rest/occurrence/get/197851862</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[RUSI 37609]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.416666,-30.783333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1991]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Zotsha]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347275">http://data.gbif.org/ws/rest/occurrence/get/193347275</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37609]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.500000,-29.216667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tugela River mouth]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851865">http://data.gbif.org/ws/rest/occurrence/get/197851865</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[RUSI 58738]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.634200,-30.488900</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1994]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Mtwalume River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/81229969">http://data.gbif.org/ws/rest/occurrence/get/81229969</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1495808]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.746400,-30.306100</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1999]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Park Rynie]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/26844705">http://data.gbif.org/ws/rest/occurrence/get/26844705</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-2115439]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.759000,-30.278800</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1991]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Scottburgh]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/80567236">http://data.gbif.org/ws/rest/occurrence/get/80567236</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1034800]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.759000,-30.278800</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1991]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Scottburgh]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/80455429">http://data.gbif.org/ws/rest/occurrence/get/80455429</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-966993]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.759000,-30.278800</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Scottburgh]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/26386103">http://data.gbif.org/ws/rest/occurrence/get/26386103</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-2447318]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.780300,-30.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1990]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Green Point Lighthouse (Natal)]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/80231176">http://data.gbif.org/ws/rest/occurrence/get/80231176</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-735007]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.780300,-30.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1993]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Green Point Lighthouse (Natal)]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/80918020">http://data.gbif.org/ws/rest/occurrence/get/80918020</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1233724]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.780300,-30.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1993]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Green Point Lighthouse (Natal)]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/80918104">http://data.gbif.org/ws/rest/occurrence/get/80918104</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1238528]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.780300,-30.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1998]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Green Point Lighthouse (Natal)]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/27067389">http://data.gbif.org/ws/rest/occurrence/get/27067389</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1999367]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.790100,-30.233900</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1991]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Clansthal]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/80571001">http://data.gbif.org/ws/rest/occurrence/get/80571001</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-978774]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.795400,-30.198700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Umkomaas Estuary]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/26327615">http://data.gbif.org/ws/rest/occurrence/get/26327615</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-2404740]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.795400,-30.198700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Umkomaas Estuary]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/26327657">http://data.gbif.org/ws/rest/occurrence/get/26327657</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-2405248]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.795400,-30.198700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Umkomaas Estuary]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/26327868">http://data.gbif.org/ws/rest/occurrence/get/26327868</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-2407063]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.881000,-30.065900</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Manzi Estuary]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/26248502">http://data.gbif.org/ws/rest/occurrence/get/26248502</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-2319109]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.950000,-29.983300</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Isipingo]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24898143">http://data.gbif.org/ws/rest/occurrence/get/24898143</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-025634]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.950000,-29.983300</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[0]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-025634]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>30.950001,-29.983334</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Isipingo]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347241">http://data.gbif.org/ws/rest/occurrence/get/193347241</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[35376]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.000000,-29.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Durban]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851847">http://data.gbif.org/ws/rest/occurrence/get/197851847</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[RUSI 35372]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.000000,-29.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Durban]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851848">http://data.gbif.org/ws/rest/occurrence/get/197851848</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[RUSI 35373]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.000000,-29.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Durban]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851851">http://data.gbif.org/ws/rest/occurrence/get/197851851</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[RUSI 35377]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.000000,-29.850000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Durban]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347242">http://data.gbif.org/ws/rest/occurrence/get/193347242</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[35377]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.000000,-29.850000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Durban]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24898144">http://data.gbif.org/ws/rest/occurrence/get/24898144</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-025635]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.000000,-29.850000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[0]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-025635]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.000000,-29.850000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1963]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-025626]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.000000,-29.850000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1963]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-025627]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.000000,-29.850000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1963]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-025628]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.000000,-29.850000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1963]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-025629]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.000000,-29.850000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1963]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Durban]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347237">http://data.gbif.org/ws/rest/occurrence/get/193347237</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[35372]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.000000,-29.850000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1963]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Durban]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347238">http://data.gbif.org/ws/rest/occurrence/get/193347238</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[35373]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.000000,-29.850000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1963]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Durban]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24898135">http://data.gbif.org/ws/rest/occurrence/get/24898135</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-025626]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.000000,-29.850000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1963]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Durban]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24898136">http://data.gbif.org/ws/rest/occurrence/get/24898136</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-025627]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.000000,-29.850000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1963]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Durban]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24898137">http://data.gbif.org/ws/rest/occurrence/get/24898137</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-025628]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.000000,-29.850000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1963]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Durban]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24898138">http://data.gbif.org/ws/rest/occurrence/get/24898138</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-025629]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.026388,-29.808332</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Athlone Bridge]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851860">http://data.gbif.org/ws/rest/occurrence/get/197851860</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[RUSI 35998]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.026388,-29.808332</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1991]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Athlone Bridge]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347272">http://data.gbif.org/ws/rest/occurrence/get/193347272</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[35998]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.027200,-29.875800</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1994]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Durban Harbour]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/81153612">http://data.gbif.org/ws/rest/occurrence/get/81153612</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1428195]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.027200,-29.875800</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1997]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Durban Harbour]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/28044384">http://data.gbif.org/ws/rest/occurrence/get/28044384</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1881755]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.027200,-29.875800</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1997]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Durban Harbour]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/28151543">http://data.gbif.org/ws/rest/occurrence/get/28151543</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1922666]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.027200,-29.875800</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1998]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Durban Harbour]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/27068105">http://data.gbif.org/ws/rest/occurrence/get/27068105</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-2008431]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.027200,-29.875800</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1998]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Durban Harbour]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/27241559">http://data.gbif.org/ws/rest/occurrence/get/27241559</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-2089978]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.027200,-29.875800</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Durban Harbour]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/26249181">http://data.gbif.org/ws/rest/occurrence/get/26249181</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-2323053]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.041111,-29.808332</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Beachwood Creek mouth]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851861">http://data.gbif.org/ws/rest/occurrence/get/197851861</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[RUSI 36012]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.041111,-29.808332</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1991]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Beachwood Creek mouth]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347273">http://data.gbif.org/ws/rest/occurrence/get/193347273</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[36012]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.047900,-29.892900</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1993]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Whaling Station]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/80917910">http://data.gbif.org/ws/rest/occurrence/get/80917910</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1226263]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.058000,-29.871000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1951]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Durban]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24956723">http://data.gbif.org/ws/rest/occurrence/get/24956723</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAMC-MBF-014331]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.058000,-29.871000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1951]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAMC-MBF-014331]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.066800,-29.761200</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1996]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Glenashley]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/27859081">http://data.gbif.org/ws/rest/occurrence/get/27859081</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1762923]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.087700,-29.728600</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1990]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Umhlanga Rocks Lighthouse]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/80232817">http://data.gbif.org/ws/rest/occurrence/get/80232817</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-761142]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.219900,-29.539600</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1992]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Ballito Bay]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/80691879">http://data.gbif.org/ws/rest/occurrence/get/80691879</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1060761]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.234100,-29.512100</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1990]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Salt Rock]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/80233188">http://data.gbif.org/ws/rest/occurrence/get/80233188</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-770658]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.234100,-29.512100</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1993]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Salt Rock]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/80920222">http://data.gbif.org/ws/rest/occurrence/get/80920222</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1285642]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.278500,-29.461100</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1988]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Umhlali River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/25857961">http://data.gbif.org/ws/rest/occurrence/get/25857961</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-447087]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.278500,-29.461100</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1989]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Umhlali River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/26026663">http://data.gbif.org/ws/rest/occurrence/get/26026663</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-623379]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.289500,-29.446400</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1992]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tinley Manor]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/80801942">http://data.gbif.org/ws/rest/occurrence/get/80801942</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1162264]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.289500,-29.446400</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1993]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tinley Manor]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/81035674">http://data.gbif.org/ws/rest/occurrence/get/81035674</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1335338]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.289500,-29.446400</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1994]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tinley Manor]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/81229904">http://data.gbif.org/ws/rest/occurrence/get/81229904</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1492541]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.289500,-29.446400</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1994]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tinley Manor]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/81232696">http://data.gbif.org/ws/rest/occurrence/get/81232696</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1511041]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.289500,-29.446400</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tinley Manor]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/27557174">http://data.gbif.org/ws/rest/occurrence/get/27557174</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1608696]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.289500,-29.446400</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tinley Manor]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/27559059">http://data.gbif.org/ws/rest/occurrence/get/27559059</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1616325]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.289500,-29.446400</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1996]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tinley Manor]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/27748305">http://data.gbif.org/ws/rest/occurrence/get/27748305</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1708619]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.289500,-29.446400</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1996]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tinley Manor]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/27750728">http://data.gbif.org/ws/rest/occurrence/get/27750728</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1712113]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.289500,-29.446400</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1996]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tinley Manor]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/27751476">http://data.gbif.org/ws/rest/occurrence/get/27751476</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1720401]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.289500,-29.446400</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1996]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tinley Manor]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/27751502">http://data.gbif.org/ws/rest/occurrence/get/27751502</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1720857]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.289500,-29.446400</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1997]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tinley Manor]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/28144190">http://data.gbif.org/ws/rest/occurrence/get/28144190</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1897046]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.289500,-29.446400</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1997]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tinley Manor]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/28144300">http://data.gbif.org/ws/rest/occurrence/get/28144300</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1897879]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.289500,-29.446400</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1998]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tinley Manor]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/27239430">http://data.gbif.org/ws/rest/occurrence/get/27239430</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-2079464]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.289500,-29.446400</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tinley Manor]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/26324369">http://data.gbif.org/ws/rest/occurrence/get/26324369</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-2372484]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.289500,-29.446400</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tinley Manor]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/26385852">http://data.gbif.org/ws/rest/occurrence/get/26385852</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-2445605]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.289500,-29.446400</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tinley Manor]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/26387180">http://data.gbif.org/ws/rest/occurrence/get/26387180</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-2451505]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.306200,-29.427000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1990]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Zeteni]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/80234073">http://data.gbif.org/ws/rest/occurrence/get/80234073</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-808261]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.351300,-29.373000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Blythedale Beach]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/26256017">http://data.gbif.org/ws/rest/occurrence/get/26256017</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-2354696]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.351300,-29.373000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Blythedale Beach]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/26328202">http://data.gbif.org/ws/rest/occurrence/get/26328202</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-2411307]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.375600,-29.351400</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1985]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Mdlotane River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/25426551">http://data.gbif.org/ws/rest/occurrence/get/25426551</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-015873]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.375600,-29.351400</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1985]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Mdlotane River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/25426573">http://data.gbif.org/ws/rest/occurrence/get/25426573</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-016325]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.375600,-29.351400</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1985]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Mdlotane River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/25426659">http://data.gbif.org/ws/rest/occurrence/get/25426659</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-018289]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.375600,-29.351400</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1985]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Mdlotane River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/25426737">http://data.gbif.org/ws/rest/occurrence/get/25426737</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-020543]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.375600,-29.351400</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1985]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Mdlotane River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/25426906">http://data.gbif.org/ws/rest/occurrence/get/25426906</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-022990]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.375600,-29.351400</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1985]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Mdlotane River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/25427105">http://data.gbif.org/ws/rest/occurrence/get/25427105</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-029524]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.500000,-29.216667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1997]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tugela River mouth]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347377">http://data.gbif.org/ws/rest/occurrence/get/193347377</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[58738]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.504700,-29.222900</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1985]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tugela River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/25426668">http://data.gbif.org/ws/rest/occurrence/get/25426668</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-018567]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.504700,-29.222900</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1985]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tugela River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/25426679">http://data.gbif.org/ws/rest/occurrence/get/25426679</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-018930]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.504700,-29.222900</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1985]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tugela River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/25426688">http://data.gbif.org/ws/rest/occurrence/get/25426688</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-019184]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.504700,-29.222900</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1985]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tugela River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/25426700">http://data.gbif.org/ws/rest/occurrence/get/25426700</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-019557]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.504700,-29.222900</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1985]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tugela River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/25426712">http://data.gbif.org/ws/rest/occurrence/get/25426712</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-019840]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.504700,-29.222900</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1985]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tugela River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/25426721">http://data.gbif.org/ws/rest/occurrence/get/25426721</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-020153]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.504700,-29.222900</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1985]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tugela River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/25426751">http://data.gbif.org/ws/rest/occurrence/get/25426751</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-020898]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.504700,-29.222900</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1985]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tugela River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/25426924">http://data.gbif.org/ws/rest/occurrence/get/25426924</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-023391]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.504700,-29.222900</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1985]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tugela River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/25426971">http://data.gbif.org/ws/rest/occurrence/get/25426971</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-024326]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.504700,-29.222900</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1985]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tugela River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/25427007">http://data.gbif.org/ws/rest/occurrence/get/25427007</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-025450]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.504700,-29.222900</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1985]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tugela River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/25427017">http://data.gbif.org/ws/rest/occurrence/get/25427017</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-025821]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.504700,-29.222900</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1985]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tugela River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/25427126">http://data.gbif.org/ws/rest/occurrence/get/25427126</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-029911]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.504700,-29.222900</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1985]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tugela River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/25427137">http://data.gbif.org/ws/rest/occurrence/get/25427137</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-030193]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.504700,-29.222900</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1985]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tugela River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/25427151">http://data.gbif.org/ws/rest/occurrence/get/25427151</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-030597]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.504700,-29.222900</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1985]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tugela River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/25427162">http://data.gbif.org/ws/rest/occurrence/get/25427162</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-030863]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.751900,-28.974900</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1990]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Mtunzini]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/80347849">http://data.gbif.org/ws/rest/occurrence/get/80347849</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-868044]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.751900,-28.974900</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1990]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Mtunzini]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/80348021">http://data.gbif.org/ws/rest/occurrence/get/80348021</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-868536]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.751900,-28.974900</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1990]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Mtunzini]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/80348291">http://data.gbif.org/ws/rest/occurrence/get/80348291</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-869238]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.751900,-28.974900</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1990]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Mtunzini]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/80348593">http://data.gbif.org/ws/rest/occurrence/get/80348593</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-870481]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.882300,-28.927600</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1992]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Mainhulyami Hill]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/80692653">http://data.gbif.org/ws/rest/occurrence/get/80692653</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1095769]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>31.921900,-28.915800</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1994]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Port Dunford Lighthouse]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/81153149">http://data.gbif.org/ws/rest/occurrence/get/81153149</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1422396]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>32.109800,-28.790700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1999]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Richards Bay]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/26947525">http://data.gbif.org/ws/rest/occurrence/get/26947525</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-2189474]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>32.109800,-28.790700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Richards Bay]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/26180903">http://data.gbif.org/ws/rest/occurrence/get/26180903</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-2295466]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>32.109800,-28.790700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Richards Bay]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/26180923">http://data.gbif.org/ws/rest/occurrence/get/26180923</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-2295771]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>32.423600,-28.385800</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1997]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[St Lucia estuary mouth]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/28147934">http://data.gbif.org/ws/rest/occurrence/get/28147934</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-1910845]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>32.423600,-28.385800</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2004]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[St Lucia estuary mouth]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/26577281">http://data.gbif.org/ws/rest/occurrence/get/26577281</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MCM-LINE-2634392]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>32.683300,-27.533300</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2007]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Anton's Sodwana]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347487">http://data.gbif.org/ws/rest/occurrence/get/193347487</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[81519]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>32.683300,-27.533300</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2007]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Anton's Sodwana]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347483">http://data.gbif.org/ws/rest/occurrence/get/193347483</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[81525]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>32.849998,-26.933332</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2003]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Kosi Lakes (2nd) - Mpungwini]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347490">http://data.gbif.org/ws/rest/occurrence/get/193347490</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[69145]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>32.855000,-26.933332</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2004]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Kosi Lake]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347491">http://data.gbif.org/ws/rest/occurrence/get/193347491</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[78519]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>32.855000,-26.933332</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2004]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Kosi Lakes]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347462">http://data.gbif.org/ws/rest/occurrence/get/193347462</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[75597]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>32.966667,-26.016666</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Mozambique]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Inhaca Island]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347239">http://data.gbif.org/ws/rest/occurrence/get/193347239</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[35374]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>32.966667,-26.016666</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Mozambique]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Inhaca Island]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851849">http://data.gbif.org/ws/rest/occurrence/get/197851849</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[RUSI 35374]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>32.966700,-26.016700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Mozambique]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Inhaca Island]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24898139">http://data.gbif.org/ws/rest/occurrence/get/24898139</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-025630]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>32.966700,-26.016700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Mozambique]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Inhaca Island]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24898140">http://data.gbif.org/ws/rest/occurrence/get/24898140</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-025631]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>32.966700,-26.016700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Mozambique]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1943]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-025630]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>32.966700,-26.016700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Mozambique]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1943]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-025631]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>35.350000,-23.666700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1954]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Morrumbene]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24956728">http://data.gbif.org/ws/rest/occurrence/get/24956728</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAMC-MBF-014386]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>35.350000,-23.666700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1954]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAMC-MBF-014386]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>35.850000,-26.916666</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[S'fungo at end of road]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851845">http://data.gbif.org/ws/rest/occurrence/get/197851845</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[RUSI 27739]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>35.850000,-26.916700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1984]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-020489]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>35.850000,-26.916700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[South Africa]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1984]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[S'fungo at end of road]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24898006">http://data.gbif.org/ws/rest/occurrence/get/24898006</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-020489]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>39.000000,20.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/93271656">http://data.gbif.org/ws/rest/occurrence/get/93271656</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[0000-8207]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>39.000000,20.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/93271530">http://data.gbif.org/ws/rest/occurrence/get/93271530</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[a-5161]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>39.000000,20.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851938">http://data.gbif.org/ws/rest/occurrence/get/197851938</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[mnhn 0000-8207]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>39.000000,-6.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Zanzibar]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476520">http://data.gbif.org/ws/rest/occurrence/get/223476520</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.21089-003]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>39.083300,-5.116670</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Tanzania]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tanga]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24898141">http://data.gbif.org/ws/rest/occurrence/get/24898141</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-025632]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>39.083300,-5.116670</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Tanzania]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tanga]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24898142">http://data.gbif.org/ws/rest/occurrence/get/24898142</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-025633]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>39.083300,-5.116670</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Tanzania]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[0]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-025632]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>39.083300,-5.116670</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Tanzania]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[0]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-025633]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>39.083332,-5.116667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Tanzania]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tanga]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347240">http://data.gbif.org/ws/rest/occurrence/get/193347240</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[35375]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>39.083332,-5.116667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Tanzania]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tanga]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851850">http://data.gbif.org/ws/rest/occurrence/get/197851850</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[RUSI 35375]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>42.833000,11.833000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/93270752">http://data.gbif.org/ws/rest/occurrence/get/93270752</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[1960-0037]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>42.833332,11.833333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851968">http://data.gbif.org/ws/rest/occurrence/get/197851968</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[mnhn 1960-0037]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>42.883300,14.916700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Yemen]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1998]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-055106]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>42.883300,14.916700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Yemen]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1998]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Hudaydah]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24898638">http://data.gbif.org/ws/rest/occurrence/get/24898638</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-055106]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>42.883335,14.916667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Yemen]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1998]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Hudaydah]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347457">http://data.gbif.org/ws/rest/occurrence/get/193347457</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[69172]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>43.183333,12.666667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Djibouti]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1994]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[North of Cape Ras Siyyan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9139">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9139</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[94/04]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>43.300000,11.633333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Djibouti]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Southern part of the Gulf of Tadjoura]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9144">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9144</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[95/13]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>43.416667,12.283333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Djibouti]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1996]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[North of Obok to Cape Ras Siyyan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9146">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9146</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[96/02]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>43.433333,12.283333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Djibouti]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[North of Obok to Cape Ras Siyyan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9137">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9137</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[95/06]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>43.433333,12.266667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Djibouti]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[North of Obok to Cape Ras Siyyan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9140">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9140</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[95/02]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>43.450000,12.333333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Djibouti]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[North of Obok to Cape Ras Siyyan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9148">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9148</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[95/17]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>43.450000,12.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Djibouti]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[North of Obok to Cape Ras Siyyan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9141">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9141</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[95/17]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>43.450000,12.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Djibouti]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1996]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[North of Obok to Cape Ras Siyyan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9145">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9145</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[96/01]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>43.450000,12.216667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Djibouti]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[North of Obok to Cape Ras Siyyan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9142">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9142</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[95/02]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>43.450000,12.200000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Djibouti]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[North of Obok to Cape Ras Siyyan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9147">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9147</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[95/11]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>43.450000,12.166667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Djibouti]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[North of Obok to Cape Ras Siyyan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9138">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9138</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[95/16]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>43.466667,12.200000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Djibouti]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[North of Obok to Cape Ras Siyyan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9143">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9143</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[95/08]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>43.466667,12.150000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Djibouti]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[North of Obok to Cape Ras Siyyan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9136">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9136</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[95/06]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>43.466667,12.150000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Djibouti]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[North of Obok to Cape Ras Siyyan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9149">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9149</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[95/08]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>43.483333,12.166667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Djibouti]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1996]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[North of Obok to Cape Ras Siyyan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9135">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=9135</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[96/02]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>43.516666,-23.333334</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Madagascar]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[tul?ar]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851971">http://data.gbif.org/ws/rest/occurrence/get/197851971</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[mnhn 1965-0375]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>43.517000,-23.333000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Madagascar]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/93270845">http://data.gbif.org/ws/rest/occurrence/get/93270845</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[1965-0375]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>49.033000,-12.333000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Madagascar]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1965]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/93271120">http://data.gbif.org/ws/rest/occurrence/get/93271120</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[1966-1016]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>49.416667,-18.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Madagascar]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1988]]></value></Data>
                <Data name="Collector"><value><![CDATA[M.L.J. STIASSNY, P.N. REINTHAL]]></value></Data>
                <Data name="Locality"><value><![CDATA[CANAL DE PANGALANE ON TOAMASINA (TAMATAVE) TO FENOARIVO (FENERIVE) ROAD, ca. 100 METERS FROM OUTFLOW TO SEA]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=928118">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=928118</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[AMNH 88162]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>49.416668,-18.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Madagascar]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1988]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[CANAL DE PANGALANE ON TOAMASINA (TAMATAVE) TO FENOARIVO (FENERIVE) ROAD, ca. 100 METERS FROM OUTFLOW TO SEA]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850526">http://data.gbif.org/ws/rest/occurrence/get/197850526</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[AMNH 88162]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>55.000000,-4.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Seychelles, Mahe fish markets]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476562">http://data.gbif.org/ws/rest/occurrence/get/223476562</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.32067-003]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>55.000000,-20.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/93271286">http://data.gbif.org/ws/rest/occurrence/get/93271286</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[0000-1323]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>55.000000,-20.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Reunion]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851912">http://data.gbif.org/ws/rest/occurrence/get/197851912</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[mnhn 0000-1323]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>55.404800,-4.654800</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Seychelles]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Pont Connal Mangrove]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/176212728">http://data.gbif.org/ws/rest/occurrence/get/176212728</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[7258]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>55.404800,-4.654800</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Seychelles]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Pont Connal Mangrove]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/203886339">http://data.gbif.org/ws/rest/occurrence/get/203886339</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[7258]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>55.404835,-4.654667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Seychelles]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2005]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[near Pont Connal]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347480">http://data.gbif.org/ws/rest/occurrence/get/193347480</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[78239]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>55.450000,-4.616667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Seychelles]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Mahe]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851852">http://data.gbif.org/ws/rest/occurrence/get/197851852</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[RUSI 35378]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>55.450000,-4.616670</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Seychelles]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1954]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-025636]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>55.450000,-4.616670</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Seychelles]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1954]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-025637]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>55.450000,-4.616670</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Seychelles]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1954]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Mahe]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24898145">http://data.gbif.org/ws/rest/occurrence/get/24898145</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-025636]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>55.450000,-4.616670</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Seychelles]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1954]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Mahe]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24898146">http://data.gbif.org/ws/rest/occurrence/get/24898146</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[SAIAB-025637]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>55.450001,-4.616667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Seychelles]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1954]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Mahe]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/193347243">http://data.gbif.org/ws/rest/occurrence/get/193347243</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[35378]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>57.733333,-20.355556</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Mauritius]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Mauritius: East Coast, Bois Des Amourettes, Mouth of Stream With Mangrove Shore]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956683">http://data.gbif.org/ws/rest/occurrence/get/149956683</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[349314.5256616]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>62.500000,-6.383333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Solomon Is.]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Upper Jaba River, Upper Jaba R. Bougainville]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851797">http://data.gbif.org/ws/rest/occurrence/get/197851797</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[ROM 28740]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>72.800000,18.900000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[India]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[BOMBAY]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476557">http://data.gbif.org/ws/rest/occurrence/get/223476557</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.21115-004]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>72.800000,18.900000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[India]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[BOMBAY]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476560">http://data.gbif.org/ws/rest/occurrence/get/223476560</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.21491-001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>72.800000,18.900000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[India]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[BOMBAY]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476559">http://data.gbif.org/ws/rest/occurrence/get/223476559</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.21491-002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>72.850000,18.933332</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[India]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[bombay]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851908">http://data.gbif.org/ws/rest/occurrence/get/197851908</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[mnhn 0000-0924]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>72.850000,18.933000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Inde]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/93271097">http://data.gbif.org/ws/rest/occurrence/get/93271097</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[0000-0924]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>76.000000,11.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Inde]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/93271556">http://data.gbif.org/ws/rest/occurrence/get/93271556</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[0000-6008]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>76.000000,11.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[India]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851919">http://data.gbif.org/ws/rest/occurrence/get/197851919</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[mnhn 0000-6008]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>79.651000,21.169000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[India]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Bandra Rocks, Bombay, Indien]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851900">http://data.gbif.org/ws/rest/occurrence/get/197851900</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[ZMH 15511]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>79.651000,21.169000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[India]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1929]]></value></Data>
                <Data name="Collector"><value><![CDATA[M??ller ded. 18.VI.1929]]></value></Data>
                <Data name="Locality"><value><![CDATA[Bandra Rocks, Bombay, Indien]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=695280">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=695280</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[ZMH 15511]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>79.800000,11.500000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[India]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Porto Novo]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476545">http://data.gbif.org/ws/rest/occurrence/get/223476545</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.27250-001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>79.800000,11.500000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[India]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Porto Novo]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476620">http://data.gbif.org/ws/rest/occurrence/get/223476620</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.37517-002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>79.833000,11.983000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Inde]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/93271654">http://data.gbif.org/ws/rest/occurrence/get/93271654</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[0000-8205]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>79.833000,11.983000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Inde]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/93271490">http://data.gbif.org/ws/rest/occurrence/get/93271490</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[a-2843]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>79.833336,11.983334</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[India]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[pondichery]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851937">http://data.gbif.org/ws/rest/occurrence/get/197851937</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[mnhn 0000-8205]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>79.833336,11.983334</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[India]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[pondichery]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851989">http://data.gbif.org/ws/rest/occurrence/get/197851989</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[mnhn a-2843]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>83.400000,17.700000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[India]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[VIZAKHAPATNAM HARBOR : DOCK]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476524">http://data.gbif.org/ws/rest/occurrence/get/223476524</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.21104-002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>85.333333,19.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[India]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Chilka Lake.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=1756627">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=1756627</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[FISH 387753]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>90.000000,10.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851984">http://data.gbif.org/ws/rest/occurrence/get/197851984</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[mnhn 1988-1710]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>90.000000,10.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Tha??lande]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/93271464">http://data.gbif.org/ws/rest/occurrence/get/93271464</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[1988-1710]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>93.000000,10.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[0]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[3629]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>98.368056,7.982222</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1993]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[ANDAMAN SEA; MANGROVE SWAMP ON NE HALF OF PHUKET]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/45147149">http://data.gbif.org/ws/rest/occurrence/get/45147149</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[69742]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>98.368060,7.982222</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[ANDAMAN SEA, MANGROVE SWAMP ON NE HALF OF PHUKET, PHUKET]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851830">http://data.gbif.org/ws/rest/occurrence/get/197851830</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[ROM 69742]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>98.397222,7.850000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1993]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[ANDAMAN SEA; PHUKET, E COAST, BETWEEN CAPE PHANWA AND PHUKET CITY]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/45147151">http://data.gbif.org/ws/rest/occurrence/get/45147151</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[69743]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>98.397224,7.850000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[ANDAMAN SEA, PHUKET, E COAST, BETWEEN CAPE PHANWA AND PHUKET CITY, PHUKET]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851831">http://data.gbif.org/ws/rest/occurrence/get/197851831</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[ROM 69743]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>98.400000,7.900000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[PHUKET :]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476527">http://data.gbif.org/ws/rest/occurrence/get/223476527</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.21184-005]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>99.000000,10.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Klong Panangtak in vic. of Ban Thup Tanhot, ca. 5 km. from Chumphon Town; water brown, turbid, 0-8' deep.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850558">http://data.gbif.org/ws/rest/occurrence/get/197850558</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[CAS 207332]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>99.183333,5.783333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354737">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354737</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>99.416667,5.183333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354735">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354735</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>99.500000,5.200000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354744">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354744</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>99.516667,5.316667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354749">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354749</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>99.550000,5.200000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354719">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354719</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>99.708333,4.566667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354779">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354779</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>99.775000,5.141667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354754">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354754</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>99.853333,5.510000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354726">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354726</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>99.908333,5.391667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354750">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354750</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>99.920000,5.280000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354722">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354722</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>100.000000,9.400000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[off south coast of Samui Island]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476589">http://data.gbif.org/ws/rest/occurrence/get/223476589</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.33349-001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>100.576670,7.225000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Brackish lagoon channel parallel to sand bar of Songkhla Channel (=Roads) near Gulf entrance.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850562">http://data.gbif.org/ws/rest/occurrence/get/197850562</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[CAS 207338]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>100.620834,7.201944</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Songkhla Fish Market; from Songkhla Channel (=Roads) next to city; murky, brackish water.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850571">http://data.gbif.org/ws/rest/occurrence/get/197850571</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[CAS 208244]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>101.287500,12.674723</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Near water gauge station, Rayong Village; narrow side channels through rushes & dense vegetation.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850570">http://data.gbif.org/ws/rest/occurrence/get/197850570</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[CAS 208243]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>101.295830,12.653334</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Broad dead-end channel at mouth of Rayong R., Ban Puk Inlet; moderate tidal current; 0-80' off sand/mud shore.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850568">http://data.gbif.org/ws/rest/occurrence/get/197850568</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[CAS 208239]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>101.423615,12.607778</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Klong Ban Phe at north end of Fisheries Training Center.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850559">http://data.gbif.org/ws/rest/occurrence/get/197850559</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[CAS 207333]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>101.766667,7.155000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354705">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354705</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>101.850000,7.058333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354713">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354713</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>101.933333,7.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354709">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354709</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.016667,6.950000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354707">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354707</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.100000,6.883333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354718">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354718</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.466667,6.666667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354769">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354769</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.566667,6.590000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354801">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354801</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.600000,6.625000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354712">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354712</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.616667,6.583333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354800">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354800</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476552">http://data.gbif.org/ws/rest/occurrence/get/223476552</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476575">http://data.gbif.org/ws/rest/occurrence/get/223476575</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476574">http://data.gbif.org/ws/rest/occurrence/get/223476574</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-003]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476573">http://data.gbif.org/ws/rest/occurrence/get/223476573</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-004]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476572">http://data.gbif.org/ws/rest/occurrence/get/223476572</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-005]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476571">http://data.gbif.org/ws/rest/occurrence/get/223476571</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-006]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476570">http://data.gbif.org/ws/rest/occurrence/get/223476570</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-007]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476569">http://data.gbif.org/ws/rest/occurrence/get/223476569</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-008]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476568">http://data.gbif.org/ws/rest/occurrence/get/223476568</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-009]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476567">http://data.gbif.org/ws/rest/occurrence/get/223476567</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-010]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476566">http://data.gbif.org/ws/rest/occurrence/get/223476566</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-011]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476597">http://data.gbif.org/ws/rest/occurrence/get/223476597</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-012]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476596">http://data.gbif.org/ws/rest/occurrence/get/223476596</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-013]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476521">http://data.gbif.org/ws/rest/occurrence/get/223476521</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-014]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476595">http://data.gbif.org/ws/rest/occurrence/get/223476595</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476594">http://data.gbif.org/ws/rest/occurrence/get/223476594</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-016]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476593">http://data.gbif.org/ws/rest/occurrence/get/223476593</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-017]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476592">http://data.gbif.org/ws/rest/occurrence/get/223476592</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-018]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476591">http://data.gbif.org/ws/rest/occurrence/get/223476591</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-019]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476590">http://data.gbif.org/ws/rest/occurrence/get/223476590</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-020]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476588">http://data.gbif.org/ws/rest/occurrence/get/223476588</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-021]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476618">http://data.gbif.org/ws/rest/occurrence/get/223476618</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-022]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476617">http://data.gbif.org/ws/rest/occurrence/get/223476617</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-023]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476616">http://data.gbif.org/ws/rest/occurrence/get/223476616</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-024]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476615">http://data.gbif.org/ws/rest/occurrence/get/223476615</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-025]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476614">http://data.gbif.org/ws/rest/occurrence/get/223476614</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-026]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476613">http://data.gbif.org/ws/rest/occurrence/get/223476613</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-027]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476612">http://data.gbif.org/ws/rest/occurrence/get/223476612</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-028]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476611">http://data.gbif.org/ws/rest/occurrence/get/223476611</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-029]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476610">http://data.gbif.org/ws/rest/occurrence/get/223476610</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-030]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476609">http://data.gbif.org/ws/rest/occurrence/get/223476609</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-031]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476551">http://data.gbif.org/ws/rest/occurrence/get/223476551</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-032]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476550">http://data.gbif.org/ws/rest/occurrence/get/223476550</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-033]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476549">http://data.gbif.org/ws/rest/occurrence/get/223476549</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-034]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476548">http://data.gbif.org/ws/rest/occurrence/get/223476548</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-035]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476547">http://data.gbif.org/ws/rest/occurrence/get/223476547</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-036]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.800000,16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Thailand]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Rayong Province,EMDEC Ban Phai]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476546">http://data.gbif.org/ws/rest/occurrence/get/223476546</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34958-037]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>102.883333,6.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354733">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354733</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>103.075000,6.591667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354728">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354728</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>103.125000,9.458333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354806">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354806</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>103.133333,9.575000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354795">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354795</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>103.150000,6.191667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354796">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354796</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>103.150000,6.083333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354798">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354798</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>103.183333,9.416667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354808">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354808</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>103.184722,6.083333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354793">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354793</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>103.300000,8.400000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354794">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354794</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>103.383000,10.517000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Cambodge]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/93270877">http://data.gbif.org/ws/rest/occurrence/get/93270877</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[1963-0559]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>103.383330,10.516666</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Cambodia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[ream]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851970">http://data.gbif.org/ws/rest/occurrence/get/197851970</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[mnhn 1963-0559]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>103.450000,5.825000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354785">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354785</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>103.450000,5.658333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354789">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354789</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>103.583333,5.333333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354790">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354790</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>103.866667,5.766667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354738">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354738</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>103.916667,4.200000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1972]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354766">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354766</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>103.983333,5.200000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354761">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354761</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.141667,4.800000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354721">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354721</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.166667,4.658333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354724">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354724</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.191667,3.841667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354787">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354787</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.216667,4.500000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354715">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354715</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.250000,4.266667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354804">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354804</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.425000,5.125000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354702">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354702</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.466667,2.850000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354703">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354703</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.483333,3.096667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1969]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354791">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354791</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.500000,3.208333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354813">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354813</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.506667,3.170000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1969]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354792">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354792</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.508333,4.383333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354717">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354717</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.508333,2.150000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354783">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354783</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.508333,1.650000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354711">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354711</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.516667,3.083333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354788">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354788</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.533333,3.108333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354786">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354786</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.533333,2.966667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1973]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354777">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354777</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.533333,2.933333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1973]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354773">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354773</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.533333,2.908333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354743">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354743</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.550000,3.225000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354746">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354746</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.550000,2.883333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1973]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354767">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354767</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.550000,1.633333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354781">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354781</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.558333,2.041667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354725">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354725</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.583333,2.833333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1973]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354772">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354772</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.600000,2.991667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354729">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354729</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.626667,2.976667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1973]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354768">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354768</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.666667,3.816667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354706">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354706</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.691667,2.666667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1972]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354765">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354765</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.700000,2.875000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1973]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354811">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354811</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.703333,2.036667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354736">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354736</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.708333,6.191667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354710">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354710</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.708333,3.033333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354739">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354739</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.716667,6.691667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354730">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354730</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.716667,2.691667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1972]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354742">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354742</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.725000,2.900000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1973]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354810">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354810</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.766667,2.916667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354759">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354759</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.783333,2.441667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354716">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354716</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.783333,2.150000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1972]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354764">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354764</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.800000,2.916667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1973]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354809">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354809</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.800000,2.550000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354802">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354802</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.800000,2.483333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1972]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354753">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354753</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.816667,2.158333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354714">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354714</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.825000,2.546667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1969]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354799">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354799</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.850000,2.666667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1972]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354755">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354755</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.858333,2.675000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354758">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354758</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.858333,2.600000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354807">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354807</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.883333,3.216667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354771">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354771</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.883333,2.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1972]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354752">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354752</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.891667,3.066667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354757">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354757</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.900000,2.733333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1972]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354747">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354747</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.900000,2.650000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1972]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354745">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354745</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.900000,2.458333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354731">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354731</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.916667,3.783333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354704">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354704</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>104.958333,6.850000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354741">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354741</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>105.250000,2.333333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354734">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354734</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>105.250000,2.150000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354720">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354720</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>105.333333,5.400000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354727">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354727</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>106.116667,5.616667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354812">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354812</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>106.250000,4.575000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354708">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354708</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>106.291667,8.258333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1930]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354723">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354723</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>109.200000,12.200000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Vietnam]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[NHATRANG]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476539">http://data.gbif.org/ws/rest/occurrence/get/223476539</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.21582-012]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>109.683333,3.566667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354797">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354797</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>109.866667,3.150000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1973]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354770">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354770</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>109.900000,2.950000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354760">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354760</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>109.933333,2.883333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354751">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354751</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>109.966667,3.083333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354732">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354732</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>110.000000,3.233333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354803">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354803</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>110.016667,2.883333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354776">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354776</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>110.166667,3.366667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354782">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354782</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>110.250000,2.916667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354775">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354775</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>110.350000,2.816667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354814">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354814</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>110.383333,3.616667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354740">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354740</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>110.483333,3.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354780">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354780</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>110.525000,3.166667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1973]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354762">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354762</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>110.700000,3.550000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354784">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354784</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>110.833333,3.400000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354778">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354778</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>111.300000,3.375000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354763">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354763</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>111.816667,4.116667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354805">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354805</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>111.900000,3.766667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1971]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354756">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354756</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>113.316667,4.533333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Singapore]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354774">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=354774</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>114.269165,22.470278</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[China Main]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Cove on south side of peninsula limiting Plover Cove on the southeast or north shore of Tolo Channel.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850555">http://data.gbif.org/ws/rest/occurrence/get/197850555</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[CAS 160964]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>114.408330,-21.516665</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1979]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21943683">http://data.gbif.org/ws/rest/occurrence/get/21943683</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[50010-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>114.408330,-21.516665</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1979]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[50010-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>114.588333,4.753333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Brunei]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1997]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Brunei: Tutong District: Lubok Api-Api, Kuala Tutong.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956649">http://data.gbif.org/ws/rest/occurrence/get/149956649</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[356818.5266075]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>114.615556,4.785833</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Brunei]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1997]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Brunei: Tutong District: Kuala Tutong, Sg That Enters Sg.?]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956650">http://data.gbif.org/ws/rest/occurrence/get/149956650</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[380615.5296055]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>115.015000,-20.590000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21941936">http://data.gbif.org/ws/rest/occurrence/get/21941936</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[47512-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>115.015000,-20.590000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[47512-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>115.762500,-19.951666</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21941952">http://data.gbif.org/ws/rest/occurrence/get/21941952</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[47540-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>115.762500,-19.951666</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[47540-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>115.968330,-19.993330</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1990]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21941750">http://data.gbif.org/ws/rest/occurrence/get/21941750</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[47172-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>115.968330,-19.993330</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1990]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[47172-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>116.133330,-20.557500</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1988]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21941493">http://data.gbif.org/ws/rest/occurrence/get/21941493</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[46475-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>116.133330,-20.557500</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1988]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[46475-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>116.558330,-19.647500</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21941989">http://data.gbif.org/ws/rest/occurrence/get/21941989</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[47569-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>116.558330,-19.647500</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[47569-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>117.085000,-19.456670</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1983]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21941089">http://data.gbif.org/ws/rest/occurrence/get/21941089</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[45146-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>117.085000,-19.456670</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1983]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[45146-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>117.400000,-19.366700</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1981]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[A 1902]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>117.400000,-19.400000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Northwest Shelf, NNE of Cape Lambert]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/224019129">http://data.gbif.org/ws/rest/occurrence/get/224019129</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[A1902]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>117.508330,-19.236666</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1986]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21941283">http://data.gbif.org/ws/rest/occurrence/get/21941283</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[46026-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>117.508330,-19.236666</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1986]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[46026-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>117.604164,-19.255835</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21942035">http://data.gbif.org/ws/rest/occurrence/get/21942035</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[47634-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>117.604164,-19.255835</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[47634-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>117.695830,-19.380830</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1997]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21943576">http://data.gbif.org/ws/rest/occurrence/get/21943576</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[47873-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>117.695830,-19.380830</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1997]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[47873-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>117.788340,-19.115000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1997]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21943572">http://data.gbif.org/ws/rest/occurrence/get/21943572</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[47863-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>117.788340,-19.115000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1997]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[47863-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>117.891670,-19.166670</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1979]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21943708">http://data.gbif.org/ws/rest/occurrence/get/21943708</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[50027-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>117.891670,-19.166670</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1979]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[50027-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>118.358340,-18.900000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1982]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21943883">http://data.gbif.org/ws/rest/occurrence/get/21943883</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[51642-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>118.358340,-18.900000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1982]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[51642-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>118.400000,24.450000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Ci Lake, Kingmen, Taiwan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851756">http://data.gbif.org/ws/rest/occurrence/get/197851756</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[NMMBA01994]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>118.580000,-19.700000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1914]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I12959]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>118.580000,-19.700000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1914]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I12960]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>118.600000,-20.300000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[PORT HEDLAND]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476554">http://data.gbif.org/ws/rest/occurrence/get/223476554</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.12959]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>118.600000,-20.300000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[PORT HEDLAND]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476553">http://data.gbif.org/ws/rest/occurrence/get/223476553</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.12960]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>118.615840,-18.839165</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1990]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21941737">http://data.gbif.org/ws/rest/occurrence/get/21941737</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[47094-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>118.615840,-18.839165</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1990]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[47094-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>118.862500,-18.808334</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1987]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21941344">http://data.gbif.org/ws/rest/occurrence/get/21941344</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[46204-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>118.862500,-18.808334</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1987]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[46204-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>119.560000,23.570000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Penghu]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851767">http://data.gbif.org/ws/rest/occurrence/get/197851767</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[NMMBA04953]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.016667,16.200000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Philippines]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1976]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Lucap Bay, NE of Lucap Pier]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/81890151">http://data.gbif.org/ws/rest/occurrence/get/81890151</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[35979-1]]></value></Data>
            </ExtendedData>
            <TimeStamp><when>1976</when></TimeStamp>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.166664,22.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1977]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[OFFSHORE, SOUTHWEST TAIWAN (TUNG KONG FISH MARKET)]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850527">http://data.gbif.org/ws/rest/occurrence/get/197850527</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[AMNH 89925]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.166667,22.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1977]]></value></Data>
                <Data name="Collector"><value><![CDATA[COMMERCIAL FISHERMEN/H.-K. MOK]]></value></Data>
                <Data name="Locality"><value><![CDATA[OFFSHORE, SOUTHWEST TAIWAN (TUNG KONG FISH MARKET)]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=928115">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=928115</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[AMNH 89925]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.200000,23.130000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tainan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851762">http://data.gbif.org/ws/rest/occurrence/get/197851762</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[NMMBA04358]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.290000,22.580000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Kaohsiung]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850534">http://data.gbif.org/ws/rest/occurrence/get/197850534</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[ASIZP0055629]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.290000,22.580000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1980]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Kaohsiung]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218770463">http://data.gbif.org/ws/rest/occurrence/get/218770463</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[055629]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.420000,22.480000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Pingtung]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851757">http://data.gbif.org/ws/rest/occurrence/get/197851757</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[NMMBA01999]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.430000,22.470000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Donggang, Pingtung]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850529">http://data.gbif.org/ws/rest/occurrence/get/197850529</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[ASIZP0055422]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.430000,22.470000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Donggang, Pingtung]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850530">http://data.gbif.org/ws/rest/occurrence/get/197850530</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[ASIZP0055454]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.430000,22.470000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Donggang, Pingtung]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850531">http://data.gbif.org/ws/rest/occurrence/get/197850531</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[ASIZP0055455]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.430000,22.470000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Donggang, Pingtung]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851788">http://data.gbif.org/ws/rest/occurrence/get/197851788</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[NTUM04861]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.430000,22.470000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1979]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Donggang, Pingtung]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218770460">http://data.gbif.org/ws/rest/occurrence/get/218770460</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[055422]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.430000,22.470000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1979]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Donggang, Pingtung]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218770461">http://data.gbif.org/ws/rest/occurrence/get/218770461</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[055454]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.430000,22.470000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1979]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Donggang, Pingtung]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218770462">http://data.gbif.org/ws/rest/occurrence/get/218770462</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[055455]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.430000,22.470000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1983]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Donggang, Pingtung]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218807539">http://data.gbif.org/ws/rest/occurrence/get/218807539</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[4861]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.460000,22.480000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1950]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Donggang, Pingtung]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218788832">http://data.gbif.org/ws/rest/occurrence/get/218788832</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[0650]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.470000,22.440000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851770">http://data.gbif.org/ws/rest/occurrence/get/197851770</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[NMNSF00115]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.470000,22.440000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Dapengwan, Pingtung]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851758">http://data.gbif.org/ws/rest/occurrence/get/197851758</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[NMMBA02117]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.470000,22.440000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Dapengwan, Pingtung]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851759">http://data.gbif.org/ws/rest/occurrence/get/197851759</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[NMMBA02148]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.470000,22.440000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2004]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Dapon-Bay, Pingtung, Taiwan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218770467">http://data.gbif.org/ws/rest/occurrence/get/218770467</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[064811]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.470000,22.440000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2004]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Dapon-Bay, Pingtung, Taiwan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218770468">http://data.gbif.org/ws/rest/occurrence/get/218770468</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[064970]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.470000,22.440000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2004]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Dapon-Bay, Pingtung, Taiwan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218770469">http://data.gbif.org/ws/rest/occurrence/get/218770469</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[064993]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.470000,22.440000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2004]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Dapon-Bay, Pingtung, Taiwan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218770470">http://data.gbif.org/ws/rest/occurrence/get/218770470</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[800181]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.470000,22.440000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2004]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Dapon-Bay, Pingtung, Taiwan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218770471">http://data.gbif.org/ws/rest/occurrence/get/218770471</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[800228]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.470000,22.440000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2004]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Dapon-Bay, Pingtung, Taiwan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218770472">http://data.gbif.org/ws/rest/occurrence/get/218770472</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[800243]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.470000,22.440000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2004]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Dapon-Bay, Pingtung, Taiwan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218770473">http://data.gbif.org/ws/rest/occurrence/get/218770473</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[910181]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.470000,22.440000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2004]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Dapon-Bay, Pingtung, Taiwan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218770474">http://data.gbif.org/ws/rest/occurrence/get/218770474</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[910228]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.470000,22.440000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2004]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Dapon-Bay, Pingtung, Taiwan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218770475">http://data.gbif.org/ws/rest/occurrence/get/218770475</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[910243]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.470000,22.440000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[TAIWAN (R.O.C)]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2003]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Dapengwan, Pingtung]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/211665288">http://data.gbif.org/ws/rest/occurrence/get/211665288</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[0115]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.470000,22.440000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[TAIWAN (R.O.C)]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2004]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Dapengwan, Pingtung]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/211665289">http://data.gbif.org/ws/rest/occurrence/get/211665289</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[0384]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.750000,22.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Taiwan Pingtung Hengchun]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851771">http://data.gbif.org/ws/rest/occurrence/get/197851771</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[NMSMP00333]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.970000,24.910000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Hongmao Harbor, Hsinchu]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850547">http://data.gbif.org/ws/rest/occurrence/get/197850547</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[ASIZP0060126]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>120.970000,24.910000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1996]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Hongmao Harbor, Hsinchu]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218770465">http://data.gbif.org/ws/rest/occurrence/get/218770465</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[060126]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>121.176000,13.408000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Philippines]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Calapan.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850605">http://data.gbif.org/ws/rest/occurrence/get/197850605</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[CAS 7121]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>121.230000,23.050000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2005]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Taitung,Cheng gong]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218788833">http://data.gbif.org/ws/rest/occurrence/get/218788833</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[1116]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>121.283330,-18.166670</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1978]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21943646">http://data.gbif.org/ws/rest/occurrence/get/21943646</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[49764-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>121.283330,-18.166670</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1978]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[49764-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>121.400000,25.170000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Bali, Taipei]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851786">http://data.gbif.org/ws/rest/occurrence/get/197851786</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[NTUM04330]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>121.400000,25.170000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1983]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Bali, Taipei]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218807536">http://data.gbif.org/ws/rest/occurrence/get/218807536</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[4330]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>121.510000,23.940000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Hualien]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851781">http://data.gbif.org/ws/rest/occurrence/get/197851781</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[NTUM00953]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>121.510000,23.940000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Hualien]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851784">http://data.gbif.org/ws/rest/occurrence/get/197851784</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[NTUM01219]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>121.520000,25.280000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2007]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218877323">http://data.gbif.org/ws/rest/occurrence/get/218877323</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[00712107]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>121.550000,25.080000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[SHIH-LIN, TAIPEI]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851782">http://data.gbif.org/ws/rest/occurrence/get/197851782</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[NTUM00954]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>121.550000,25.080000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1955]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[SHIH-LIN, TAIPEI]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218807524">http://data.gbif.org/ws/rest/occurrence/get/218807524</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[0954]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>121.550000,22.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Lyudao, Taidung]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851755">http://data.gbif.org/ws/rest/occurrence/get/197851755</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[NMMBA01869]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>121.610000,23.940000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1955]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Hualien]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218807520">http://data.gbif.org/ws/rest/occurrence/get/218807520</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[0953]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>121.610000,23.940000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1955]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Hualien]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218807533">http://data.gbif.org/ws/rest/occurrence/get/218807533</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[1219]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>121.635278,14.765556</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Philippines]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1996]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Philippines: Quezon, Gen. Nakar, Agos River, Brgy. Banglos]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956614">http://data.gbif.org/ws/rest/occurrence/get/149956614</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[346689.5253417]]></value></Data>
            </ExtendedData>
            <TimeStamp><when>1996</when></TimeStamp>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>121.635278,14.765556</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Philippines]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1997]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Philippines: Quezon Province, Gen. Nakar, Agos River, Brgy. Maigang]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956586">http://data.gbif.org/ws/rest/occurrence/get/149956586</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[346671.5253387]]></value></Data>
            </ExtendedData>
            <TimeStamp><when>1997</when></TimeStamp>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>121.760000,25.160000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Keelung]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851783">http://data.gbif.org/ws/rest/occurrence/get/197851783</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[NTUM00955]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>121.760000,25.160000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1955]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Keelung]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218807527">http://data.gbif.org/ws/rest/occurrence/get/218807527</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[0955]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>121.860000,24.590000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850549">http://data.gbif.org/ws/rest/occurrence/get/197850549</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[ASIZP0062868]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>121.860000,24.590000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218770466">http://data.gbif.org/ws/rest/occurrence/get/218770466</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[062868]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>121.930000,25.020000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[estuary, Shuangsi, Taipei]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850546">http://data.gbif.org/ws/rest/occurrence/get/197850546</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[ASIZP0059776]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>121.930000,25.020000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Taiwan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[estuary, Shuangsi, Taipei]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/218770464">http://data.gbif.org/ws/rest/occurrence/get/218770464</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[059776]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>123.000000,9.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Philippines]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Philippines, Negros Oriental, Siaton, Siaton River, river mouth]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956827">http://data.gbif.org/ws/rest/occurrence/get/149956827</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[385456.5304724]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>123.241389,9.412500</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Philippines]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1978]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Philippines: Negros Oriental, Vic Ayuquitan Viejo Village, Estaurine Mouth of Ayuquitan Daku River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956706">http://data.gbif.org/ws/rest/occurrence/get/149956706</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[295982.5177032]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>123.274444,9.367222</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Philippines]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1978]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Philippines: Mouth of Ocoy River between Sibulan and Looc villages, on Negros Oriental.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956718">http://data.gbif.org/ws/rest/occurrence/get/149956718</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[295883.5176825]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>123.309722,9.330556</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Philippines]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1978]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Philippines: Negros Oriental, Vic Dumaguete Airport & Silliman Univ. Marine Lab, Mojon Creek, Estuarine Slough Near Mouth.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956743">http://data.gbif.org/ws/rest/occurrence/get/149956743</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[295911.5176901]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>124.083330,-14.066665</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1980]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21943842">http://data.gbif.org/ws/rest/occurrence/get/21943842</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[51294-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>124.083330,-14.066665</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1980]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[51294-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>124.475000,-13.783330</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1979]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21943723">http://data.gbif.org/ws/rest/occurrence/get/21943723</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[50062-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>124.475000,-13.783330</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1979]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[50062-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>124.841670,-12.925000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1979]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21943727">http://data.gbif.org/ws/rest/occurrence/get/21943727</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[50068-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>124.841670,-12.925000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1979]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[50068-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>124.916664,1.700000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Indonesia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[manado]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851935">http://data.gbif.org/ws/rest/occurrence/get/197851935</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[mnhn 0000-8203]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>124.917000,1.700000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Indon??sie]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/93271652">http://data.gbif.org/ws/rest/occurrence/get/93271652</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[0000-8203]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>127.683333,0.883333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Indonesia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1981]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Pacific: Indonesia: Northern Moluccas, Halmahera Islands, Jailolo District, Kampung Pasir Putih.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956590">http://data.gbif.org/ws/rest/occurrence/get/149956590</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[363261.5274347]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>127.683334,0.883333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Indonesia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Halmahera Is., Jailolo Dist., Kampung Pasir Putih.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850602">http://data.gbif.org/ws/rest/occurrence/get/197850602</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[CAS 57319]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>127.683334,0.883333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Indonesia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Halmahera Is., Jailolo District, Kampung Pasir Putih.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850603">http://data.gbif.org/ws/rest/occurrence/get/197850603</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[CAS 57320]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>127.900000,1.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Indonesia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Kampung Loleba, Wasile District Halmahera Island, Indonesia.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956584">http://data.gbif.org/ws/rest/occurrence/get/149956584</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[228004.5086528]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>127.900000,1.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Indonesia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Kampung Loleba, Wasile District, Halmahera Island, Indonesia.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956582">http://data.gbif.org/ws/rest/occurrence/get/149956582</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[228002.5086526]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>127.900000,1.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Indonesia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1978]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Kampung Loleba, Wasile District, Halmahera Island, Indonesia.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956583">http://data.gbif.org/ws/rest/occurrence/get/149956583</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[228003.5086527]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>128.166670,-3.833333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Indonesia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851936">http://data.gbif.org/ws/rest/occurrence/get/197851936</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[mnhn 0000-8204]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>128.167000,-3.833000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Indon??sie]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/93271653">http://data.gbif.org/ws/rest/occurrence/get/93271653</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[0000-8204]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>128.200000,-3.600000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Indonesia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1974]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Wailella River, Rumahtiga Ambon, Moluccas, Indonesia, downstream from VGS 74-14 (Freshwater)]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956605">http://data.gbif.org/ws/rest/occurrence/get/149956605</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[298403.5181955]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>128.308333,-3.575000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Indonesia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1974]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[River mouth and stream at Wai, Ambon (Southern Limit of Wai)]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956806">http://data.gbif.org/ws/rest/occurrence/get/149956806</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[292100.5169967]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>128.925000,-12.458335</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1979]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21943746">http://data.gbif.org/ws/rest/occurrence/get/21943746</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[50113-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>128.925000,-12.458335</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1979]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[50113-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>129.250000,-13.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829550">http://data.gbif.org/ws/rest/occurrence/get/24829550</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3112:239:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>129.250000,-13.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3112:239:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>129.250000,-13.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829552">http://data.gbif.org/ws/rest/occurrence/get/24829552</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3112:239:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>129.250000,-13.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3112:239:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>129.416670,28.333334</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Japan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Amami-oshima, Kagoshima, Japan]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851643">http://data.gbif.org/ws/rest/occurrence/get/197851643</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IGFA 1407-7614]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>129.500000,28.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Japan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Amami-oshima, Kagoshima]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=1786147">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=1786147</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IGFA]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>129.750000,-13.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829551">http://data.gbif.org/ws/rest/occurrence/get/24829551</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3112:239:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>129.750000,-13.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3112:239:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>129.750000,-13.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829553">http://data.gbif.org/ws/rest/occurrence/get/24829553</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3112:239:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>129.750000,-13.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3112:239:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.250000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829555">http://data.gbif.org/ws/rest/occurrence/get/24829555</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:110:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.250000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829556">http://data.gbif.org/ws/rest/occurrence/get/24829556</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:110:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.250000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829557">http://data.gbif.org/ws/rest/occurrence/get/24829557</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:110:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.250000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:110:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.250000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:110:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.250000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:110:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.250000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829561">http://data.gbif.org/ws/rest/occurrence/get/24829561</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:110:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.250000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829562">http://data.gbif.org/ws/rest/occurrence/get/24829562</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:110:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.250000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829563">http://data.gbif.org/ws/rest/occurrence/get/24829563</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:110:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.250000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:110:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.250000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:110:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.250000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:110:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.250000,-12.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829595">http://data.gbif.org/ws/rest/occurrence/get/24829595</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:120:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.250000,-12.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829596">http://data.gbif.org/ws/rest/occurrence/get/24829596</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:120:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.250000,-12.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829597">http://data.gbif.org/ws/rest/occurrence/get/24829597</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:120:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.250000,-12.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:120:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.250000,-12.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:120:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.250000,-12.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:120:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.250000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829601">http://data.gbif.org/ws/rest/occurrence/get/24829601</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:120:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.250000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829602">http://data.gbif.org/ws/rest/occurrence/get/24829602</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:120:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.250000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829603">http://data.gbif.org/ws/rest/occurrence/get/24829603</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:120:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.250000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:120:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.250000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:120:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.250000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:120:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.300000,-11.766666</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Bathurst Island, N.T., Australia]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851641">http://data.gbif.org/ws/rest/occurrence/get/197851641</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IGFA 1407-7611]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.750000,-0.233330</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Indonesia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Waigeo, Indonesia.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=1768240">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=1768240</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[FB 2741288]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.750000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829558">http://data.gbif.org/ws/rest/occurrence/get/24829558</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:110:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.750000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829559">http://data.gbif.org/ws/rest/occurrence/get/24829559</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:110:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.750000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829560">http://data.gbif.org/ws/rest/occurrence/get/24829560</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:110:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.750000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:110:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.750000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:110:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.750000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:110:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.750000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829564">http://data.gbif.org/ws/rest/occurrence/get/24829564</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:110:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.750000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829565">http://data.gbif.org/ws/rest/occurrence/get/24829565</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:110:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.750000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829566">http://data.gbif.org/ws/rest/occurrence/get/24829566</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:110:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.750000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:110:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.750000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:110:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.750000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:110:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.750000,-12.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829598">http://data.gbif.org/ws/rest/occurrence/get/24829598</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:120:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.750000,-12.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829599">http://data.gbif.org/ws/rest/occurrence/get/24829599</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:120:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.750000,-12.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829600">http://data.gbif.org/ws/rest/occurrence/get/24829600</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:120:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.750000,-12.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:120:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.750000,-12.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:120:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.750000,-12.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:120:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.750000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829604">http://data.gbif.org/ws/rest/occurrence/get/24829604</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:120:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.750000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829605">http://data.gbif.org/ws/rest/occurrence/get/24829605</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:120:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.750000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829606">http://data.gbif.org/ws/rest/occurrence/get/24829606</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:120:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.750000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:120:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.750000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:120:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.750000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:120:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.800000,-12.400000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[8km N.E. of Darwin, Ludmilla creek (just upstream from marina)]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476543">http://data.gbif.org/ws/rest/occurrence/get/223476543</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.23917-002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>130.830000,-11.580000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1983]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I23917002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>131.100000,-12.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1979]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[South Shore, East Vernon I., Clarence Strait, N. of Gunn Point, Northern Territory, Australia]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956828">http://data.gbif.org/ws/rest/occurrence/get/149956828</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[269873.5128132]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>131.250000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829567">http://data.gbif.org/ws/rest/occurrence/get/24829567</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:111:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>131.250000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829568">http://data.gbif.org/ws/rest/occurrence/get/24829568</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:111:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>131.250000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829569">http://data.gbif.org/ws/rest/occurrence/get/24829569</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:111:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>131.250000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:111:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>131.250000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:111:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>131.250000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:111:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>131.250000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829573">http://data.gbif.org/ws/rest/occurrence/get/24829573</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:111:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>131.250000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829574">http://data.gbif.org/ws/rest/occurrence/get/24829574</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:111:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>131.250000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829575">http://data.gbif.org/ws/rest/occurrence/get/24829575</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:111:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>131.250000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:111:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>131.250000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:111:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>131.250000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:111:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>131.750000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829570">http://data.gbif.org/ws/rest/occurrence/get/24829570</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:111:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>131.750000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829571">http://data.gbif.org/ws/rest/occurrence/get/24829571</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:111:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>131.750000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829572">http://data.gbif.org/ws/rest/occurrence/get/24829572</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:111:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>131.750000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:111:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>131.750000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:111:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>131.750000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:111:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>131.750000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829576">http://data.gbif.org/ws/rest/occurrence/get/24829576</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:111:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>131.750000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829577">http://data.gbif.org/ws/rest/occurrence/get/24829577</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:111:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>131.750000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829578">http://data.gbif.org/ws/rest/occurrence/get/24829578</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:111:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>131.750000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:111:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>131.750000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:111:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>131.750000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:111:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.250000,-10.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829554">http://data.gbif.org/ws/rest/occurrence/get/24829554</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:102:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.250000,-10.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:102:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.250000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829579">http://data.gbif.org/ws/rest/occurrence/get/24829579</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:112:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.250000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829580">http://data.gbif.org/ws/rest/occurrence/get/24829580</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:112:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.250000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829581">http://data.gbif.org/ws/rest/occurrence/get/24829581</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:112:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.250000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:112:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.250000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:112:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.250000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:112:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.250000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829585">http://data.gbif.org/ws/rest/occurrence/get/24829585</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:112:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.250000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829586">http://data.gbif.org/ws/rest/occurrence/get/24829586</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:112:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.250000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829587">http://data.gbif.org/ws/rest/occurrence/get/24829587</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:112:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.250000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:112:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.250000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:112:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.250000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:112:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.500000,-7.500000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/93271731">http://data.gbif.org/ws/rest/occurrence/get/93271731</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[0000-8358]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.500000,-7.500000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/93271732">http://data.gbif.org/ws/rest/occurrence/get/93271732</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[0000-8359]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.500000,-7.500000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Indonesia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[waigeoe(i.)]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851953">http://data.gbif.org/ws/rest/occurrence/get/197851953</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[mnhn 0000-8381]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.500000,-7.500000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Indon??sie]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/93271733">http://data.gbif.org/ws/rest/occurrence/get/93271733</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[0000-8381]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.500000,-7.500000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Papua N Guin]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851951">http://data.gbif.org/ws/rest/occurrence/get/197851951</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[mnhn 0000-8358]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.500000,-7.500000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Papua N Guin]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851952">http://data.gbif.org/ws/rest/occurrence/get/197851952</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[mnhn 0000-8359]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.750000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829582">http://data.gbif.org/ws/rest/occurrence/get/24829582</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:112:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.750000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829583">http://data.gbif.org/ws/rest/occurrence/get/24829583</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:112:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.750000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829584">http://data.gbif.org/ws/rest/occurrence/get/24829584</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:112:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.750000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:112:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.750000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:112:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.750000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:112:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.750000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829588">http://data.gbif.org/ws/rest/occurrence/get/24829588</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:112:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.750000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829589">http://data.gbif.org/ws/rest/occurrence/get/24829589</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:112:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.750000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829590">http://data.gbif.org/ws/rest/occurrence/get/24829590</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:112:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.750000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:112:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.750000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:112:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>132.750000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:112:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>133.000000,32.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Japan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Ashizuri Misaki, Kochi]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=1786146">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=1786146</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IGFA]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>133.250000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829591">http://data.gbif.org/ws/rest/occurrence/get/24829591</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:113:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>133.250000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:113:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>133.250000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829593">http://data.gbif.org/ws/rest/occurrence/get/24829593</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:113:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>133.250000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:113:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>133.750000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829592">http://data.gbif.org/ws/rest/occurrence/get/24829592</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:113:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>133.750000,-11.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:113:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>133.750000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829594">http://data.gbif.org/ws/rest/occurrence/get/24829594</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:113:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>133.750000,-11.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:113:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>134.384170,7.123334</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Palau]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Constriction in channel 1/2 mile south of Ataburai Pt.; coral head rising from sand bottom; no vegetation.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850600">http://data.gbif.org/ws/rest/occurrence/get/197850600</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[CAS 55244]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>134.489720,7.451667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Palau]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Kyam Stream just s. of Medorum Village; water slightly brownish, turbid; no vegetation; soil, rock shore.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850556">http://data.gbif.org/ws/rest/occurrence/get/197850556</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[CAS 207330]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>134.495290,7.346389</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Palau]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Aragamaye village; fresh water streamlet "Ngetuchong"; 0-4' off mud shore; water 0-3' deep; no vegetation.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850565">http://data.gbif.org/ws/rest/occurrence/get/197850565</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[CAS 207342]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>134.502500,7.347778</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Palau]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Ngertehiyau stream flowing through Ngerubodoru Village (Ngerbodel); water brown, slightly turbid, 1-4' deep.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850560">http://data.gbif.org/ws/rest/occurrence/get/197850560</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[CAS 207334]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>134.518620,7.390000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Palau]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Arakitaoch stream, mangrove zone, ca. 2.1 mi. SE of Ngarekeai village; water brown, slightly turbid, 0-3' deep.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850564">http://data.gbif.org/ws/rest/occurrence/get/197850564</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[CAS 207341]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>134.518620,7.390000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Palau]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Mangrove zone, ca. 1.1 mile southeast of Ngarekeai village.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850563">http://data.gbif.org/ws/rest/occurrence/get/197850563</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[CAS 207340]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>134.520280,7.388889</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Palau]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Arakitaoch stream, south fork, upper mangrove zone, ca. 1.2 miles southeast of Ngarekeai village.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850567">http://data.gbif.org/ws/rest/occurrence/get/197850567</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[CAS 208238]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>134.590270,7.384722</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Palau]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Kaud stream, mangrove, vicinity of Nggasagang village; drainage channel of stream through mangrove swamp.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850566">http://data.gbif.org/ws/rest/occurrence/get/197850566</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[CAS 208225]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>134.623340,7.714722</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Palau]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Ngarehelong Peninsula; stream south of Olei Village; water fresh and brackish, slightly yellowish, 0-5' deep.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850569">http://data.gbif.org/ws/rest/occurrence/get/197850569</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[CAS 208240]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>134.636110,7.688055</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Palau]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Ngarehelong Peninsula, southwest of Mengellang Village; Tilorch Stream, running into lagoon at foot of Oktol Pier.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850561">http://data.gbif.org/ws/rest/occurrence/get/197850561</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[CAS 207336]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.000000,-15.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1967]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IB7945]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.000000,-15.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[EDWARD PELLEW IS : WEST IS]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476564">http://data.gbif.org/ws/rest/occurrence/get/223476564</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IB.7945]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.108340,-14.533330</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1981]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21943870">http://data.gbif.org/ws/rest/occurrence/get/21943870</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[51455-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.108340,-14.533330</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1981]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[51455-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.250000,-12.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829607">http://data.gbif.org/ws/rest/occurrence/get/24829607</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:226:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.250000,-12.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829608">http://data.gbif.org/ws/rest/occurrence/get/24829608</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:226:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.250000,-12.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829609">http://data.gbif.org/ws/rest/occurrence/get/24829609</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:226:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.250000,-12.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:226:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.250000,-12.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:226:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.250000,-12.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:226:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.250000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829613">http://data.gbif.org/ws/rest/occurrence/get/24829613</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:226:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.250000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829614">http://data.gbif.org/ws/rest/occurrence/get/24829614</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:226:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.250000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829615">http://data.gbif.org/ws/rest/occurrence/get/24829615</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:226:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.250000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:226:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.250000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:226:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.250000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:226:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.250000,-14.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829620">http://data.gbif.org/ws/rest/occurrence/get/24829620</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:246:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.250000,-14.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:246:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.250000,-15.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829621">http://data.gbif.org/ws/rest/occurrence/get/24829621</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:456:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.250000,-15.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:456:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.250000,-15.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829623">http://data.gbif.org/ws/rest/occurrence/get/24829623</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:456:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.250000,-15.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:456:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.750000,-12.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829610">http://data.gbif.org/ws/rest/occurrence/get/24829610</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:226:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.750000,-12.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829611">http://data.gbif.org/ws/rest/occurrence/get/24829611</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:226:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.750000,-12.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829612">http://data.gbif.org/ws/rest/occurrence/get/24829612</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:226:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.750000,-12.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:226:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.750000,-12.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:226:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.750000,-12.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:226:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.750000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829616">http://data.gbif.org/ws/rest/occurrence/get/24829616</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:226:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.750000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829617">http://data.gbif.org/ws/rest/occurrence/get/24829617</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:226:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.750000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829618">http://data.gbif.org/ws/rest/occurrence/get/24829618</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:226:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.750000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:226:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.750000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:226:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.750000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:226:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.750000,-13.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829619">http://data.gbif.org/ws/rest/occurrence/get/24829619</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:236:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.750000,-13.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:236:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.750000,-15.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829622">http://data.gbif.org/ws/rest/occurrence/get/24829622</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:456:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.750000,-15.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:456:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.750000,-15.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829624">http://data.gbif.org/ws/rest/occurrence/get/24829624</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:456:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>136.750000,-15.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:456:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>137.149700,-4.781111</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Indonesia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Lower Mawati; S-760.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/198261174">http://data.gbif.org/ws/rest/occurrence/get/198261174</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[178842]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>137.250000,-15.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829625">http://data.gbif.org/ws/rest/occurrence/get/24829625</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:457:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>137.250000,-15.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:457:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>138.134170,9.540278</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Micronesia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Stream at Rumu Village at bridge on road to Tageren Canal from bridge upstream (west); water 0.5-5' deep.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850557">http://data.gbif.org/ws/rest/occurrence/get/197850557</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[CAS 207331]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>138.250000,-16.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829627">http://data.gbif.org/ws/rest/occurrence/get/24829627</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:468:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>138.250000,-16.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:468:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>138.966670,-15.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1980]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21943856">http://data.gbif.org/ws/rest/occurrence/get/21943856</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[51373-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>138.966670,-15.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1980]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[51373-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>139.750000,-15.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829626">http://data.gbif.org/ws/rest/occurrence/get/24829626</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:459:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>139.750000,-15.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3113:459:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>140.493000,-2.446000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Papua New Guinea]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Yemang Camp]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197140523">http://data.gbif.org/ws/rest/occurrence/get/197140523</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[17022]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>141.233340,-14.483330</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1981]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21943861">http://data.gbif.org/ws/rest/occurrence/get/21943861</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[51415-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>141.233340,-14.483330</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1981]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[51415-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>141.270000,-6.153333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Papua New Guinea]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1975]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Fly Basin, Ox-Bow Lake With Mouth Open To Mainstream of Upper Fly, 4 km Downriver From Kiunga, 828 km Upriver From Toro Pass.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956805">http://data.gbif.org/ws/rest/occurrence/get/149956805</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[217217.5075792]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>141.350000,-12.650000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1986]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21943586">http://data.gbif.org/ws/rest/occurrence/get/21943586</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[49498-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>141.350000,-12.650000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1986]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[49498-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>141.500000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1987]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21943596">http://data.gbif.org/ws/rest/occurrence/get/21943596</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[49580-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>141.500000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1987]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21943597">http://data.gbif.org/ws/rest/occurrence/get/21943597</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[49587-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>141.500000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1988]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/21943598">http://data.gbif.org/ws/rest/occurrence/get/21943598</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[49607-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>141.500000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1987]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[49580-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>141.500000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1987]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[49587-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>141.500000,-12.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1988]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[49607-37346015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>141.875000,38.156667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Japan]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1906]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Japan: Honshu Island; Kinka San Lt., N 61 Degrees W., 15.4 Miles.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956792">http://data.gbif.org/ws/rest/occurrence/get/149956792</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[385096.5304160]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>142.200000,-9.380000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1979]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I20927001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>142.200000,-10.600000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[PRINCE OF WALES IS : SMITH POINT - CREEK]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476531">http://data.gbif.org/ws/rest/occurrence/get/223476531</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.20927-001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>143.250000,-9.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829549">http://data.gbif.org/ws/rest/occurrence/get/24829549</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3014:393:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>143.250000,-9.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3014:393:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>143.250000,-10.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829628">http://data.gbif.org/ws/rest/occurrence/get/24829628</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3114:103:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>143.250000,-10.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3114:103:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>143.600000,-3.541667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Papua New Guinea]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1979]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Namboguru Cr., Cape Wom, Wewak, Papua, New Guinea]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956617">http://data.gbif.org/ws/rest/occurrence/get/149956617</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[269879.5128137]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>143.600000,-12.120000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1983]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I25478001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>143.600000,-13.900000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Roberts Point]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476523">http://data.gbif.org/ws/rest/occurrence/get/223476523</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.25478-001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>143.750000,-9.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829548">http://data.gbif.org/ws/rest/occurrence/get/24829548</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3014:393:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>143.750000,-9.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3014:393:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>144.000000,13.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Guam]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Ylig River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476621">http://data.gbif.org/ws/rest/occurrence/get/223476621</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.39651-001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.038333,-1.545833</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Papua New Guinea]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1978]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Papua-New Guinea: Hermit Islands, Akib Island, Tidal Cut Along Southwest End]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956630">http://data.gbif.org/ws/rest/occurrence/get/149956630</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[295915.5176905]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.200000,-15.500000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Just South of Cooktown, Finches Beach]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476528">http://data.gbif.org/ws/rest/occurrence/get/223476528</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.22784-014]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.200000,-15.600000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[S OF COOKTOWN : ESK R. MANGROVE SWAMP]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476606">http://data.gbif.org/ws/rest/occurrence/get/223476606</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.21273-005]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.200000,-16.200000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Daintree River mouth, south bank behind mouth.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476604">http://data.gbif.org/ws/rest/occurrence/get/223476604</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.22722-015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.250000,-14.450000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1979]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I21273005]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.250000,-14.530000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1881]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I16329001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.250000,-14.530000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1980]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I22784014]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.250000,-15.830000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1981]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I22722015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.270630,-14.851900</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1998]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/122510971">http://data.gbif.org/ws/rest/occurrence/get/122510971</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[GA077_Lutjanus_argentimaculatus]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.300000,-15.200000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[CAPE BEDFORD :]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476577">http://data.gbif.org/ws/rest/occurrence/get/223476577</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.13956]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.300000,-16.200000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Daintree River, Stewart Creek about 0.5 km upstream from bridge]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476578">http://data.gbif.org/ws/rest/occurrence/get/223476578</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.22049-010]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.330000,-14.770000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1916]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I13956]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.330000,-15.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1980]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I22049010]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.351400,-14.792550</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1997]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/122510914">http://data.gbif.org/ws/rest/occurrence/get/122510914</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[FQ216_Lutjanus_argentimaculatus]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.355160,-14.785167</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1996]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/122510826">http://data.gbif.org/ws/rest/occurrence/get/122510826</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[FE067_Lutjanus_argentimaculatus]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.355160,-14.785167</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/122511281">http://data.gbif.org/ws/rest/occurrence/get/122511281</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[HF206_Lutjanus_argentimaculatus]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.400000,-15.730000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1980]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I22052008]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.400000,-16.300000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[4 miles  up Daintree R., creek at Starcks jetty.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476544">http://data.gbif.org/ws/rest/occurrence/get/223476544</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.22052-008]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.433330,-16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Cape Tribulation Cr,Pool Below Crossing ***]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851806">http://data.gbif.org/ws/rest/occurrence/get/197851806</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[ROM 38571]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.433333,-16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1981]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/45146334">http://data.gbif.org/ws/rest/occurrence/get/45146334</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[38571]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.450000,-13.320000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1975]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I19102030]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.450000,-13.330000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1975]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I32375002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.460000,-14.680000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Lizard Island, Mangrove Beach]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476625">http://data.gbif.org/ws/rest/occurrence/get/223476625</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.44725-002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.470000,-15.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1980]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I22051017]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.470000,-15.920000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1979]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I21258009]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.480000,-15.420000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1980]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I22747021]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.500000,-14.666667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Ferrier Creek, Ferrier Cr,Entering S Corner Mrs Watsons Bay,Lizard Island,Great Barrier Reef]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851808">http://data.gbif.org/ws/rest/occurrence/get/197851808</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[ROM 39595]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.500000,-14.666667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1981]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Ferrier Creek; Ferrier Cr,Entering S Corner Mrs Watsons Bay,Lizard Island,Great Barrier Reef]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/45146106">http://data.gbif.org/ws/rest/occurrence/get/45146106</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[39595]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.500000,-14.700000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[LIZARD ISLAND : MRS WATSONS BEACH]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476624">http://data.gbif.org/ws/rest/occurrence/get/223476624</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.19102-030]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.500000,-14.700000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Lizard island, Mr's Watsons Mangrove]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476622">http://data.gbif.org/ws/rest/occurrence/get/223476622</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.32375-002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.500000,-16.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[CAPE TRIBULATION : CREEK 200M S OF CAPE]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476619">http://data.gbif.org/ws/rest/occurrence/get/223476619</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.21258-009]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.500000,-16.200000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Daintree R. mouth, mangrove Ck, S bank of river.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476529">http://data.gbif.org/ws/rest/occurrence/get/223476529</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.22051-017]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.500000,-16.600000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[3km S of Mowbray R]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476602">http://data.gbif.org/ws/rest/occurrence/get/223476602</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.22747-021]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.570000,-16.180000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1970]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I17999002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.570950,-16.383516</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2004]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/122511385">http://data.gbif.org/ws/rest/occurrence/get/122511385</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[HP191_Lutjanus_argentimaculatus]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.573460,-16.390217</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/122511089">http://data.gbif.org/ws/rest/occurrence/get/122511089</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[GM186_Lutjanus_argentimaculatus]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.700000,-16.170000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1966]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IB7488]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.700000,-17.800000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[TULLY RIVER]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476537">http://data.gbif.org/ws/rest/occurrence/get/223476537</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IB.7488]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.750000,-15.130000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1980]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I22037014]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.750000,-15.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829630">http://data.gbif.org/ws/rest/occurrence/get/24829630</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3114:455:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.750000,-15.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829631">http://data.gbif.org/ws/rest/occurrence/get/24829631</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3114:455:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.750000,-15.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3114:455:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.750000,-15.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3114:455:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.750000,-16.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829632">http://data.gbif.org/ws/rest/occurrence/get/24829632</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3114:465:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.750000,-16.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3114:465:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.783340,-5.116667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Papua N Guin]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Biges R., western and eastern side of North Coast Road; fresh to brackish water (tidal).]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197850604">http://data.gbif.org/ws/rest/occurrence/get/197850604</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[CAS 63322]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.800000,-5.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Papua New Guinea]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[MADANG HARBOUR : 2 MILES S. OF MAIWARA]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476526">http://data.gbif.org/ws/rest/occurrence/get/223476526</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.16665-002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.800000,-5.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Papua New Guinea]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[MADANG HARBOUR : MAIWARA, BOSTREM BAY]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476532">http://data.gbif.org/ws/rest/occurrence/get/223476532</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.16673-002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.800000,-5.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Papua New Guinea]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Madang Harbour, Bostrem Bay, stream at coastal road 5km N of Maiwara]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476583">http://data.gbif.org/ws/rest/occurrence/get/223476583</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.16668-021]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.800000,-5.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Papua New Guinea]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[NEAR MADANG HARBOUR : 5KM S.OF ALEXISHAFEN]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476587">http://data.gbif.org/ws/rest/occurrence/get/223476587</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.16760-001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.800000,-5.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Papua New Guinea]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[NEAR MADANG HARBOUR : MAIWARA-ALEXISHAFEN]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476605">http://data.gbif.org/ws/rest/occurrence/get/223476605</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.16670-001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.800000,-5.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Papua New Guinea]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[NEAR MADANG HARBOUR : MAIWARA-ALEXISHAFEN]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476555">http://data.gbif.org/ws/rest/occurrence/get/223476555</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.16670-027]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.800000,-16.900000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[N of Cairns, Kewarra Beach mangrove, upstream from NFNQ 80-7]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476522">http://data.gbif.org/ws/rest/occurrence/get/223476522</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.22037-014]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>145.993130,-16.923150</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/122510737">http://data.gbif.org/ws/rest/occurrence/get/122510737</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[ES011_Lutjanus_argentimaculatus]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.000000,-17.830000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1881]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I16331001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.000000,-18.200000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Tully River]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476599">http://data.gbif.org/ws/rest/occurrence/get/223476599</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.17999-002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.056870,-16.555367</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/122511092">http://data.gbif.org/ws/rest/occurrence/get/122511092</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[GM201_Lutjanus_argentimaculatus]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.100000,-16.080000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1980]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I22776015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.100000,-17.900000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Wongalin Beach, between Mission and S Mission beaches.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476556">http://data.gbif.org/ws/rest/occurrence/get/223476556</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.22776-015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.250000,-17.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829634">http://data.gbif.org/ws/rest/occurrence/get/24829634</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3114:476:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.250000,-17.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3114:476:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.427410,-18.812500</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/122511120">http://data.gbif.org/ws/rest/occurrence/get/122511120</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[GO080_Lutjanus_argentimaculatus]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.427410,-18.812500</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/122511265">http://data.gbif.org/ws/rest/occurrence/get/122511265</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[HC206_Lutjanus_argentimaculatus]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.427410,-18.812500</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2003]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/122511340">http://data.gbif.org/ws/rest/occurrence/get/122511340</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[HK206_Lutjanus_argentimaculatus]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.427410,-18.812500</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2005]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/122511494">http://data.gbif.org/ws/rest/occurrence/get/122511494</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IK146_Lutjanus_argentimaculatus]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.650000,-19.183332</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Mangrove Creek, Saunder's Beach,18km N of Townsville,Mangrove Creek 20M on Land Side of Rd Parallel To Shore]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851809">http://data.gbif.org/ws/rest/occurrence/get/197851809</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[ROM 39605]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.650000,-19.183333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1981]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Mangrove Creek; Saunder's Beach,18km N of Townsville,Mangrove Creek 20M on Land Side of Rd Parallel To Shore]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/45146121">http://data.gbif.org/ws/rest/occurrence/get/45146121</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[39605]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.733333,-19.233333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1981]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Three Mile Creek; On Road Between Townesville And Pallarenda, 5km From Townseville]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/45146100">http://data.gbif.org/ws/rest/occurrence/get/45146100</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[39593]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.733340,-19.233334</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Three Mile Creek, On Road Between Townesville And Pallarenda, 5km From Townseville]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851807">http://data.gbif.org/ws/rest/occurrence/get/197851807</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[ROM 39593]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.750000,-13.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829629">http://data.gbif.org/ws/rest/occurrence/get/24829629</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3114:236:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.750000,-13.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3114:236:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.750000,-17.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829635">http://data.gbif.org/ws/rest/occurrence/get/24829635</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3114:476:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.750000,-17.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829636">http://data.gbif.org/ws/rest/occurrence/get/24829636</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3114:476:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.750000,-17.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3114:476:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.750000,-17.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3114:476:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.750000,-18.800000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1982]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I23313030]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.768000,-18.554500</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/115862110">http://data.gbif.org/ws/rest/occurrence/get/115862110</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[CBG_7_5_4737]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.800000,-18.780000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1965]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I21149001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.800000,-18.780000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1978]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I21207002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.800000,-19.200000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[TOWNSVILLE : BOHLE R ESTUARY]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476579">http://data.gbif.org/ws/rest/occurrence/get/223476579</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.21149-001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.800000,-19.200000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[TOWNSVILLE : ROSS CREEK]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476533">http://data.gbif.org/ws/rest/occurrence/get/223476533</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.21207-002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.800000,-19.200000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Townsville, Three Mile Creek, Cape Pallarenda]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476530">http://data.gbif.org/ws/rest/occurrence/get/223476530</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.23313-030]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.800000,-19.300000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[TOWNSVILLE]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476540">http://data.gbif.org/ws/rest/occurrence/get/223476540</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IB.7530]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.820000,-18.730000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1966]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IB7530]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.862500,-18.469660</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/115862645">http://data.gbif.org/ws/rest/occurrence/get/115862645</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[MID_12_4_3037]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>146.883590,-18.478733</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1997]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/122510874">http://data.gbif.org/ws/rest/occurrence/get/122510874</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[FJ045_Lutjanus_argentimaculatus]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>147.000000,-9.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[New Guinea]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[PORT MORESBY DISTRICT]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476582">http://data.gbif.org/ws/rest/occurrence/get/223476582</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.9125]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>147.100000,-9.500000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Papua New Guinea]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[in and about Port Moresby]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/224019131">http://data.gbif.org/ws/rest/occurrence/get/224019131</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[A19043]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>147.116700,-9.500000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Papua New Guinea]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1881]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[A 19043]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>147.120000,-7.270000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Papua New Guinea]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Bitoi/Areku, Kamiali Village, Morobe Province, 2 hrs by boat S of Lae]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476601">http://data.gbif.org/ws/rest/occurrence/get/223476601</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.39585-003]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>147.300000,-9.500000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[New Guinea]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[16KM SE PORT MORESBY : DOGURA CREEK]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476563">http://data.gbif.org/ws/rest/occurrence/get/223476563</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.17076-005]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>147.300000,-9.500000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[New Guinea]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[16KM SE PORT MORESBY : DOGURA CREEK]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476576">http://data.gbif.org/ws/rest/occurrence/get/223476576</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.17104-009]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>147.480000,-18.550000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1980]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I22774008]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>147.500000,-9.800000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Papua New Guinea]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[in a small river near Cuppa Cuppa (Kapakapa)]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/224019130">http://data.gbif.org/ws/rest/occurrence/get/224019130</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[A19778]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>147.500000,-19.400000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[near Ayr, Alva Beach]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476565">http://data.gbif.org/ws/rest/occurrence/get/223476565</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.22774-008]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>147.516700,-9.800000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Papua New Guinea]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1881]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[A 19778]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>147.527500,-19.527500</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[BLACKSAND CREEK, ON ROAD TO AIMS, S OF TOWNSVILLE, 75M ABOVE RW94-01 AND 200M UP CREEK]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851828">http://data.gbif.org/ws/rest/occurrence/get/197851828</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[ROM 68435]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>147.527500,-19.527500</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[BLACKSAND CREEK, ON ROAD TO AIMS, S OF TOWNSVILLE, BETWEEN RW94-01 AND RW94-03]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851829">http://data.gbif.org/ws/rest/occurrence/get/197851829</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[ROM 68436]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>147.527500,-19.527500</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[BLACKSAND CREEK, ON ROAD TO AIMS,S OF TOWNSVILLE,FIRST CREEK AFTER INITIAL MAIN SPLIT (SEE MAP SKETCH ON FIELD SHEET)]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851827">http://data.gbif.org/ws/rest/occurrence/get/197851827</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[ROM 68434]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>147.527500,-19.527500</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1994]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[BLACKSAND CREEK; ON ROAD TO AIMS, S OF TOWNSVILLE, 75M ABOVE RW94-01 AND 200M UP CREEK]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/45147125">http://data.gbif.org/ws/rest/occurrence/get/45147125</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[68435]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>147.527500,-19.527500</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1994]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[BLACKSAND CREEK; ON ROAD TO AIMS, S OF TOWNSVILLE, BETWEEN RW94-01 AND RW94-03]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/45147126">http://data.gbif.org/ws/rest/occurrence/get/45147126</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[68436]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>147.527500,-19.527500</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1994]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[BLACKSAND CREEK; ON ROAD TO AIMS,S OF TOWNSVILLE,FIRST CREEK AFTER INITIAL MAIN SPLIT (SEE MAP SKETCH ON FIELD SHEET)]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/45147121">http://data.gbif.org/ws/rest/occurrence/get/45147121</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[68434]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>147.750000,-16.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829633">http://data.gbif.org/ws/rest/occurrence/get/24829633</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3114:467:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>147.750000,-16.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3114:467:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>147.750000,-19.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829637">http://data.gbif.org/ws/rest/occurrence/get/24829637</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3114:497:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>147.750000,-19.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829638">http://data.gbif.org/ws/rest/occurrence/get/24829638</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3114:497:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>147.750000,-19.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3114:497:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>147.750000,-19.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3114:497:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>148.000000,-18.020000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1975]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I18477009]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>148.000000,-20.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[SALTWATER CREEK : ABT 18KM N OF BOWEN]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476542">http://data.gbif.org/ws/rest/occurrence/get/223476542</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.18477-009]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>148.370000,-18.270000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1965]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IB7463]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>148.370000,-18.270000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1965]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IB7492]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>148.400000,-19.700000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[HOLBOURNE IS]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476584">http://data.gbif.org/ws/rest/occurrence/get/223476584</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IB.7463]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>148.400000,-19.700000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[HOLBOURNE IS :]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476534">http://data.gbif.org/ws/rest/occurrence/get/223476534</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IB.7492]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>148.500000,-8.900000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Papua New Guinea]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1975]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Papua New Guinea, Popondetta District, Mangrove Creeks Flowing Into Oro Bay.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956802">http://data.gbif.org/ws/rest/occurrence/get/149956802</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[300030.5183297]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>148.750000,-20.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829639">http://data.gbif.org/ws/rest/occurrence/get/24829639</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3214:208:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>148.750000,-20.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3214:208:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>148.899400,-20.056984</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1996]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/122510793">http://data.gbif.org/ws/rest/occurrence/get/122510793</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[EZ065_Lutjanus_argentimaculatus]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>148.901660,-20.059666</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1994]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/122510646">http://data.gbif.org/ws/rest/occurrence/get/122510646</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[EE025_Lutjanus_argentimaculatus]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>149.035720,-20.175316</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1995]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/122510707">http://data.gbif.org/ws/rest/occurrence/get/122510707</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[EL236_Lutjanus_argentimaculatus]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>149.250000,-21.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829640">http://data.gbif.org/ws/rest/occurrence/get/24829640</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3214:219:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>149.250000,-21.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3214:219:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>149.250000,-21.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829641">http://data.gbif.org/ws/rest/occurrence/get/24829641</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3214:219:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>149.250000,-21.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829642">http://data.gbif.org/ws/rest/occurrence/get/24829642</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3214:219:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>149.250000,-21.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3214:219:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>149.250000,-21.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3214:219:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>149.750000,-36.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829666">http://data.gbif.org/ws/rest/occurrence/get/24829666</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3314:469:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>149.750000,-36.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829667">http://data.gbif.org/ws/rest/occurrence/get/24829667</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3314:469:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>149.750000,-36.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3314:469:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>149.750000,-36.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3314:469:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>149.750000,-37.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829668">http://data.gbif.org/ws/rest/occurrence/get/24829668</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3314:479:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>149.750000,-37.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829669">http://data.gbif.org/ws/rest/occurrence/get/24829669</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3314:479:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>149.750000,-37.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3314:479:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>149.750000,-37.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3314:479:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>149.750000,-37.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829670">http://data.gbif.org/ws/rest/occurrence/get/24829670</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3314:479:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>149.750000,-37.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829671">http://data.gbif.org/ws/rest/occurrence/get/24829671</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3314:479:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>149.750000,-37.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3314:479:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>149.750000,-37.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3314:479:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>149.915160,-19.662850</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1992]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/122510560">http://data.gbif.org/ws/rest/occurrence/get/122510560</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[CK131_Lutjanus_argentimaculatus]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>149.915160,-19.662850</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/122511100">http://data.gbif.org/ws/rest/occurrence/get/122511100</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[GN030_Lutjanus_argentimaculatus]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>149.915160,-19.662850</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2005]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/122511484">http://data.gbif.org/ws/rest/occurrence/get/122511484</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[II191_Lutjanus_argentimaculatus]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.250000,-35.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829756">http://data.gbif.org/ws/rest/occurrence/get/24829756</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:350:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.250000,-35.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829757">http://data.gbif.org/ws/rest/occurrence/get/24829757</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:350:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.250000,-35.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:350:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.250000,-35.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:350:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.250000,-35.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829760">http://data.gbif.org/ws/rest/occurrence/get/24829760</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:350:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.250000,-35.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829761">http://data.gbif.org/ws/rest/occurrence/get/24829761</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:350:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.250000,-35.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:350:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.250000,-35.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:350:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.250000,-36.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829766">http://data.gbif.org/ws/rest/occurrence/get/24829766</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:360:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.250000,-36.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829767">http://data.gbif.org/ws/rest/occurrence/get/24829767</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:360:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.250000,-36.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:360:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.250000,-36.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:360:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.250000,-36.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829770">http://data.gbif.org/ws/rest/occurrence/get/24829770</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:360:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.250000,-36.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829771">http://data.gbif.org/ws/rest/occurrence/get/24829771</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:360:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.250000,-36.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:360:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.250000,-36.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:360:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.250000,-37.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829772">http://data.gbif.org/ws/rest/occurrence/get/24829772</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:370:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.250000,-37.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829773">http://data.gbif.org/ws/rest/occurrence/get/24829773</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:370:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.250000,-37.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:370:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.250000,-37.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:370:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.250000,-37.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829774">http://data.gbif.org/ws/rest/occurrence/get/24829774</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:370:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.250000,-37.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829775">http://data.gbif.org/ws/rest/occurrence/get/24829775</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:370:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.250000,-37.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:370:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.250000,-37.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:370:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.366667,-5.166667</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Papua New Guinea]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1994]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Kimbe bay, New Britain]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=1756148">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=1756148</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[FISH 387266]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.610000,-22.620000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Cockatoo Island, Head Creek, Shoalwater Bay]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476580">http://data.gbif.org/ws/rest/occurrence/get/223476580</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.34322-004]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.620000,-21.380000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1993]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I34322004]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.750000,-23.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829643">http://data.gbif.org/ws/rest/occurrence/get/24829643</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:130:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.750000,-23.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:130:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.750000,-34.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829738">http://data.gbif.org/ws/rest/occurrence/get/24829738</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:140:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.750000,-34.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829739">http://data.gbif.org/ws/rest/occurrence/get/24829739</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:140:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.750000,-34.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829740">http://data.gbif.org/ws/rest/occurrence/get/24829740</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:140:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.750000,-34.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:140:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.750000,-34.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:140:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.750000,-34.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:140:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.750000,-34.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829741">http://data.gbif.org/ws/rest/occurrence/get/24829741</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:140:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.750000,-34.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829742">http://data.gbif.org/ws/rest/occurrence/get/24829742</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:140:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.750000,-34.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829743">http://data.gbif.org/ws/rest/occurrence/get/24829743</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:140:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.750000,-34.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:140:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.750000,-34.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:140:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.750000,-34.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:140:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.750000,-35.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829758">http://data.gbif.org/ws/rest/occurrence/get/24829758</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:350:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.750000,-35.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829759">http://data.gbif.org/ws/rest/occurrence/get/24829759</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:350:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.750000,-35.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:350:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.750000,-35.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:350:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.750000,-35.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829762">http://data.gbif.org/ws/rest/occurrence/get/24829762</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:350:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.750000,-35.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829763">http://data.gbif.org/ws/rest/occurrence/get/24829763</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:350:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.750000,-35.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:350:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.750000,-35.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:350:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.750000,-36.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829768">http://data.gbif.org/ws/rest/occurrence/get/24829768</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:360:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.750000,-36.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829769">http://data.gbif.org/ws/rest/occurrence/get/24829769</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:360:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.750000,-36.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:360:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.750000,-36.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:360:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.870000,-33.450000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1964]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IB7286]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.900000,-34.500000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Lake Illawarra]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476585">http://data.gbif.org/ws/rest/occurrence/get/223476585</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IB.7286]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>150.993333,-8.530000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Papua New Guinea]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1979]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[West side of Boli Anchorage, Kiriwina I., Trobriand Is., Papua New Guinea]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956634">http://data.gbif.org/ws/rest/occurrence/get/149956634</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[245754.5104221]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.200000,-33.800000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Bottle and Glass Rocks, Port Jackson]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476603">http://data.gbif.org/ws/rest/occurrence/get/223476603</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IB.2927]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-32.150000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1953]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IB2927]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-33.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829717">http://data.gbif.org/ws/rest/occurrence/get/24829717</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:131:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-33.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829718">http://data.gbif.org/ws/rest/occurrence/get/24829718</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:131:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-33.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829719">http://data.gbif.org/ws/rest/occurrence/get/24829719</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:131:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-33.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:131:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-33.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:131:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-33.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:131:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-33.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829723">http://data.gbif.org/ws/rest/occurrence/get/24829723</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:131:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-33.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829724">http://data.gbif.org/ws/rest/occurrence/get/24829724</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:131:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-33.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829725">http://data.gbif.org/ws/rest/occurrence/get/24829725</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:131:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-33.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:131:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-33.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:131:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-33.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:131:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-34.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829744">http://data.gbif.org/ws/rest/occurrence/get/24829744</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:141:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-34.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829745">http://data.gbif.org/ws/rest/occurrence/get/24829745</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:141:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-34.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829746">http://data.gbif.org/ws/rest/occurrence/get/24829746</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:141:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-34.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:141:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-34.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:141:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-34.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:141:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-34.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829750">http://data.gbif.org/ws/rest/occurrence/get/24829750</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:141:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-34.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829751">http://data.gbif.org/ws/rest/occurrence/get/24829751</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:141:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-34.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829752">http://data.gbif.org/ws/rest/occurrence/get/24829752</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:141:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-34.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:141:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-34.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:141:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-34.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:141:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-35.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829764">http://data.gbif.org/ws/rest/occurrence/get/24829764</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:351:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-35.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829765">http://data.gbif.org/ws/rest/occurrence/get/24829765</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:351:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-35.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:351:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.250000,-35.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:351:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.270000,-32.220000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1979]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I21124001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.300000,-32.450000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1965]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IB7280]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.300000,-33.500000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[PORT JACKSON : OBELISK BAY]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476586">http://data.gbif.org/ws/rest/occurrence/get/223476586</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IB.7280]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.300000,-33.700000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[SYDNEY : LONG REEF]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476558">http://data.gbif.org/ws/rest/occurrence/get/223476558</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.18105-001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.300000,-33.800000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[QUEENSCLIFF, SYDNEY : MANLY LAGOON]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476598">http://data.gbif.org/ws/rest/occurrence/get/223476598</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.21124-001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.330000,-32.270000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1974]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I18105001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-32.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829696">http://data.gbif.org/ws/rest/occurrence/get/24829696</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:121:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-32.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829697">http://data.gbif.org/ws/rest/occurrence/get/24829697</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:121:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-32.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829698">http://data.gbif.org/ws/rest/occurrence/get/24829698</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:121:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-32.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:121:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-32.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:121:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-32.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:121:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-33.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829720">http://data.gbif.org/ws/rest/occurrence/get/24829720</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:131:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-33.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829721">http://data.gbif.org/ws/rest/occurrence/get/24829721</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:131:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-33.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829722">http://data.gbif.org/ws/rest/occurrence/get/24829722</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:131:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-33.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:131:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-33.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:131:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-33.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:131:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-33.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829726">http://data.gbif.org/ws/rest/occurrence/get/24829726</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:131:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-33.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829727">http://data.gbif.org/ws/rest/occurrence/get/24829727</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:131:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-33.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829728">http://data.gbif.org/ws/rest/occurrence/get/24829728</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:131:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-33.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:131:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-33.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:131:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-33.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:131:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-34.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829747">http://data.gbif.org/ws/rest/occurrence/get/24829747</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:141:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-34.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829748">http://data.gbif.org/ws/rest/occurrence/get/24829748</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:141:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-34.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829749">http://data.gbif.org/ws/rest/occurrence/get/24829749</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:141:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-34.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:141:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-34.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:141:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-34.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:141:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-34.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829753">http://data.gbif.org/ws/rest/occurrence/get/24829753</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:141:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-34.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829754">http://data.gbif.org/ws/rest/occurrence/get/24829754</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:141:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-34.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829755">http://data.gbif.org/ws/rest/occurrence/get/24829755</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:141:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-34.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:141:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-34.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:141:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.750000,-34.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:141:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.900000,-23.400000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[HERON IS :]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476536">http://data.gbif.org/ws/rest/occurrence/get/223476536</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IB.7490]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>151.920000,-22.570000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1965]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IB7490]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.000000,-29.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1957]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IB3785]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.000000,-29.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[50 MLS UP CLARENCE R :]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476607">http://data.gbif.org/ws/rest/occurrence/get/223476607</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IB.3785]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.000000,-31.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1960]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IB4563]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.000000,-31.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[MANNING RIVER :]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476541">http://data.gbif.org/ws/rest/occurrence/get/223476541</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IB.4563]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.080000,-22.500000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1965]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IB7491]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.100000,-23.500000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[ONE TREE IS :]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476535">http://data.gbif.org/ws/rest/occurrence/get/223476535</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IB.7491]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.250000,-23.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829644">http://data.gbif.org/ws/rest/occurrence/get/24829644</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:132:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.250000,-23.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:132:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.250000,-32.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829699">http://data.gbif.org/ws/rest/occurrence/get/24829699</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:122:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.250000,-32.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829700">http://data.gbif.org/ws/rest/occurrence/get/24829700</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:122:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.250000,-32.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829701">http://data.gbif.org/ws/rest/occurrence/get/24829701</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:122:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.250000,-32.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:122:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.250000,-32.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:122:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.250000,-32.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:122:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.250000,-32.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829705">http://data.gbif.org/ws/rest/occurrence/get/24829705</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:122:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.250000,-32.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829706">http://data.gbif.org/ws/rest/occurrence/get/24829706</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:122:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.250000,-32.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829707">http://data.gbif.org/ws/rest/occurrence/get/24829707</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:122:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.250000,-32.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:122:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.250000,-32.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:122:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.250000,-32.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:122:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.250000,-33.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829729">http://data.gbif.org/ws/rest/occurrence/get/24829729</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:132:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.250000,-33.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829730">http://data.gbif.org/ws/rest/occurrence/get/24829730</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:132:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.250000,-33.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829731">http://data.gbif.org/ws/rest/occurrence/get/24829731</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:132:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.250000,-33.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:132:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.250000,-33.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:132:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.250000,-33.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:132:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.250000,-33.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829735">http://data.gbif.org/ws/rest/occurrence/get/24829735</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:132:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.250000,-33.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829736">http://data.gbif.org/ws/rest/occurrence/get/24829736</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:132:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.250000,-33.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829737">http://data.gbif.org/ws/rest/occurrence/get/24829737</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:132:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.250000,-33.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:132:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.250000,-33.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:132:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.250000,-33.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:132:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-30.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829672">http://data.gbif.org/ws/rest/occurrence/get/24829672</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:102:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-30.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829673">http://data.gbif.org/ws/rest/occurrence/get/24829673</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:102:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-30.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829674">http://data.gbif.org/ws/rest/occurrence/get/24829674</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:102:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-30.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:102:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-30.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:102:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-30.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:102:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-31.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829684">http://data.gbif.org/ws/rest/occurrence/get/24829684</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:112:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-31.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829685">http://data.gbif.org/ws/rest/occurrence/get/24829685</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:112:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-31.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829686">http://data.gbif.org/ws/rest/occurrence/get/24829686</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:112:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-31.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:112:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-31.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:112:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-31.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:112:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-31.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829687">http://data.gbif.org/ws/rest/occurrence/get/24829687</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:112:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-31.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829688">http://data.gbif.org/ws/rest/occurrence/get/24829688</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:112:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-31.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829689">http://data.gbif.org/ws/rest/occurrence/get/24829689</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:112:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-31.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:112:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-31.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:112:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-31.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:112:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-32.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829702">http://data.gbif.org/ws/rest/occurrence/get/24829702</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:122:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-32.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829703">http://data.gbif.org/ws/rest/occurrence/get/24829703</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:122:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-32.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829704">http://data.gbif.org/ws/rest/occurrence/get/24829704</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:122:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-32.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:122:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-32.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:122:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-32.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:122:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-32.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829708">http://data.gbif.org/ws/rest/occurrence/get/24829708</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:122:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-32.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829709">http://data.gbif.org/ws/rest/occurrence/get/24829709</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:122:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-32.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829710">http://data.gbif.org/ws/rest/occurrence/get/24829710</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:122:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-32.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:122:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-32.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:122:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-32.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:122:4-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-33.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829732">http://data.gbif.org/ws/rest/occurrence/get/24829732</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:132:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-33.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829733">http://data.gbif.org/ws/rest/occurrence/get/24829733</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:132:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-33.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829734">http://data.gbif.org/ws/rest/occurrence/get/24829734</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:132:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-33.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:132:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-33.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:132:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>152.750000,-33.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:132:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.000000,-29.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1956]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IB3611]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.000000,-29.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[CLARENCE RIVER :]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476525">http://data.gbif.org/ws/rest/occurrence/get/223476525</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IB.3611]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-27.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Moreton Bay, Queensland, Australia.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=1768245">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=1768245</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[FB 2741293]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-28.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829648">http://data.gbif.org/ws/rest/occurrence/get/24829648</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:383:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-28.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829649">http://data.gbif.org/ws/rest/occurrence/get/24829649</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:383:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-28.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:383:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-28.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:383:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-29.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829656">http://data.gbif.org/ws/rest/occurrence/get/24829656</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:393:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-29.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829657">http://data.gbif.org/ws/rest/occurrence/get/24829657</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:393:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-29.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:393:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-29.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:393:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-29.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829660">http://data.gbif.org/ws/rest/occurrence/get/24829660</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:393:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-29.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829661">http://data.gbif.org/ws/rest/occurrence/get/24829661</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:393:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-29.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:393:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-29.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:393:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-30.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829675">http://data.gbif.org/ws/rest/occurrence/get/24829675</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:103:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-30.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829676">http://data.gbif.org/ws/rest/occurrence/get/24829676</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:103:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-30.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829677">http://data.gbif.org/ws/rest/occurrence/get/24829677</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:103:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-30.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:103:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-30.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:103:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-30.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:103:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-30.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829681">http://data.gbif.org/ws/rest/occurrence/get/24829681</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:103:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-30.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829682">http://data.gbif.org/ws/rest/occurrence/get/24829682</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:103:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-30.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829683">http://data.gbif.org/ws/rest/occurrence/get/24829683</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:103:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-30.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:103:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-30.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:103:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-30.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:103:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-31.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829690">http://data.gbif.org/ws/rest/occurrence/get/24829690</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:113:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-31.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829691">http://data.gbif.org/ws/rest/occurrence/get/24829691</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:113:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-31.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829692">http://data.gbif.org/ws/rest/occurrence/get/24829692</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:113:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-31.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:113:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-31.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:113:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-31.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:113:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-31.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829693">http://data.gbif.org/ws/rest/occurrence/get/24829693</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:113:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-31.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829694">http://data.gbif.org/ws/rest/occurrence/get/24829694</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:113:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-31.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829695">http://data.gbif.org/ws/rest/occurrence/get/24829695</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:113:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-31.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:113:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-31.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:113:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-31.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:113:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-32.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829711">http://data.gbif.org/ws/rest/occurrence/get/24829711</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:123:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-32.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829712">http://data.gbif.org/ws/rest/occurrence/get/24829712</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:123:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-32.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829713">http://data.gbif.org/ws/rest/occurrence/get/24829713</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:123:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-32.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:123:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-32.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:123:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-32.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:123:1-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-32.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829714">http://data.gbif.org/ws/rest/occurrence/get/24829714</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:123:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-32.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829715">http://data.gbif.org/ws/rest/occurrence/get/24829715</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:123:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-32.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829716">http://data.gbif.org/ws/rest/occurrence/get/24829716</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:123:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-32.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:123:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-32.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:123:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.250000,-32.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:123:3-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.570000,-27.150000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I41264005]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.570000,-28.840000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[North Creek, N side of Prospect bridge, E side of breakwater]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476561">http://data.gbif.org/ws/rest/occurrence/get/223476561</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.41264-005]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.750000,-28.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829645">http://data.gbif.org/ws/rest/occurrence/get/24829645</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:383:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.750000,-28.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829646">http://data.gbif.org/ws/rest/occurrence/get/24829646</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:383:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.750000,-28.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829647">http://data.gbif.org/ws/rest/occurrence/get/24829647</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:383:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.750000,-28.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:383:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.750000,-28.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:383:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.750000,-28.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:383:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.750000,-28.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829650">http://data.gbif.org/ws/rest/occurrence/get/24829650</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:383:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.750000,-28.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829651">http://data.gbif.org/ws/rest/occurrence/get/24829651</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:383:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.750000,-28.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:383:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.750000,-28.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:383:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.750000,-29.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829658">http://data.gbif.org/ws/rest/occurrence/get/24829658</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:393:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.750000,-29.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829659">http://data.gbif.org/ws/rest/occurrence/get/24829659</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:393:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.750000,-29.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:393:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.750000,-29.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:393:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.750000,-29.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829662">http://data.gbif.org/ws/rest/occurrence/get/24829662</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:393:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.750000,-29.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829663">http://data.gbif.org/ws/rest/occurrence/get/24829663</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:393:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.750000,-29.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:393:4-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.750000,-29.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:393:4-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.750000,-30.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829678">http://data.gbif.org/ws/rest/occurrence/get/24829678</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:103:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.750000,-30.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829679">http://data.gbif.org/ws/rest/occurrence/get/24829679</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:103:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.750000,-30.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829680">http://data.gbif.org/ws/rest/occurrence/get/24829680</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:103:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.750000,-30.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:103:2-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.750000,-30.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:103:2-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>153.750000,-30.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2002]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3315:103:2-2002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>154.250000,-28.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829652">http://data.gbif.org/ws/rest/occurrence/get/24829652</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:384:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>154.250000,-28.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829653">http://data.gbif.org/ws/rest/occurrence/get/24829653</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:384:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>154.250000,-28.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:384:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>154.250000,-28.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:384:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>154.250000,-28.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829654">http://data.gbif.org/ws/rest/occurrence/get/24829654</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:384:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>154.250000,-28.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829655">http://data.gbif.org/ws/rest/occurrence/get/24829655</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:384:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>154.250000,-28.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:384:3-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>154.250000,-28.750000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:384:3-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>154.250000,-29.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829664">http://data.gbif.org/ws/rest/occurrence/get/24829664</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:394:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>154.250000,-29.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/24829665">http://data.gbif.org/ws/rest/occurrence/get/24829665</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:394:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>154.250000,-29.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2000]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:394:1-2000]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>154.250000,-29.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[37346015-3215:394:1-2001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>158.198056,7.000000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Micronesia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1980]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[River; Just Down From Jokaj Waterfall]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956558">http://data.gbif.org/ws/rest/occurrence/get/149956558</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[223460.5082008]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>159.070000,-32.450000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[2001]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus">http://www.iobis.org/OBISWEB/ObisControllerServlet?site=fishbase&amp;searchCategory=%2FAdvancedSearchServlet&amp;genus=Lutjanus&amp;species=argentimaculatus</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I40959001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>159.100000,-33.500000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Australia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Lord Howe Island, South Creek (opens into lagoon)]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476608">http://data.gbif.org/ws/rest/occurrence/get/223476608</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.40959-001]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>160.600000,-8.400000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Solomon Islands]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[BITA-AMA REEF : NORTH SIDE MALAITA IS.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476581">http://data.gbif.org/ws/rest/occurrence/get/223476581</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.15360-064]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>165.711100,-21.744444</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[New Caledonia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Coral Sea, Baie De Teremba, West Side Off Shrimp Farm]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851825">http://data.gbif.org/ws/rest/occurrence/get/197851825</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[ROM 64999]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>165.711111,-21.744444</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[New Caledonia]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1991]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Coral Sea; Baie De Teremba, West Side Off Shrimp Farm]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/45146903">http://data.gbif.org/ws/rest/occurrence/get/45146903</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[64999]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>166.300000,-10.300000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Solomon Islands]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Santa Cruz Is, Reef Is, Mangroves;W side of Lomlom Is, village;Ngamapeka.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476538">http://data.gbif.org/ws/rest/occurrence/get/223476538</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.39003-015]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>167.200000,-15.400000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Vanuatu]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[ESPIRITU SANTO : 8KM N OF LUGANVILLE]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476600">http://data.gbif.org/ws/rest/occurrence/get/223476600</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.17478-017]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>169.180556,-18.725000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Vanuatu]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1996]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Vanuatu, Erromango, River Flowing Into Bay Polenia, From the Mouth, Upstream For About 300 Yards.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956687">http://data.gbif.org/ws/rest/occurrence/get/149956687</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[360094.5270526]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>178.100000,-17.500000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Fiji]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Togavere]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/223476623">http://data.gbif.org/ws/rest/occurrence/get/223476623</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[I.31514-002]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>178.200000,-18.200000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Fiji]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1982]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Fiji Islands, Viti Levu, Naikorokoro Creek about 1 km W of Monford Boys. Town (SW of Suva about 15 km, 8 km west of Fisherie lab along road.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956719">http://data.gbif.org/ws/rest/occurrence/get/149956719</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[258890.5117342]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>178.200000,-18.200000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Fiji]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1982]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Fiji Islands, Viti Levu, Naikorokoro Creek about 1 km W of Monford Boys. Town (SW of Suva about 15 km, 8 km west of Fisherie lab along road.]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956773">http://data.gbif.org/ws/rest/occurrence/get/149956773</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[260043.5118494]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>178.261110,-18.155556</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Fiji]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Unnamed Swamp, Creek About 15 km West of Lami]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851819">http://data.gbif.org/ws/rest/occurrence/get/197851819</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[ROM 50528]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>178.261111,-18.155555</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Fiji]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1983]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Unnamed Swamp; Creek About 15 km West of Lami]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/45146375">http://data.gbif.org/ws/rest/occurrence/get/45146375</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[50528]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>178.300000,-18.100000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Fiji]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1982]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Fiji Ids, Viti Levu, Naqara (Nangara) Id, Mud Flat North of Island]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956549">http://data.gbif.org/ws/rest/occurrence/get/149956549</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[258864.5117316]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>178.300000,-18.154167</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Fiji]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[1982]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Fiji Ids, Viti Levu, Wainidoi River - Just Upstream From Mouth]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/149956765">http://data.gbif.org/ws/rest/occurrence/get/149956765</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[258895.5117347]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>178.433330,-18.133333</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Fiji]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Suva Harbour, Fiji Island]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://data.gbif.org/ws/rest/occurrence/get/197851642">http://data.gbif.org/ws/rest/occurrence/get/197851642</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IGFA 1407-7613]]></value></Data>
            </ExtendedData>
            </Placemark><Placemark><name></name>
              <styleUrl>#Fishes</styleUrl>
              <Point><coordinates>178.500000,-18.250000</coordinates></Point>
              <ExtendedData>
                <Data name="Country"><value><![CDATA[Fiji (Republic o]]></value></Data>
                <Data name="YearCollected"><value><![CDATA[]]></value></Data>
                <Data name="Collector"><value><![CDATA[]]></value></Data>
                <Data name="Locality"><value><![CDATA[Suva Harbour]]></value></Data><Data name="Url"><value><![CDATA[<a href="http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=1780950">http://www.fishbase.org/Museum/SpecOccurrences.php?catnum2=1780950</a>]]></value></Data><Data name="CatalogNum"><value><![CDATA[IGFA]]></value></Data>
            </ExtendedData>
            </Placemark></Document>
          </kml>`.trim(),
  "text/xml"
);

export default function Cesium() {
  return (
    <Viewer full>
      <KmlDataSource
        data={data}
        show={true}
        onLoad={() => console.log("loaded!!!!!!!!!")}
      />
    </Viewer>
  );
}
