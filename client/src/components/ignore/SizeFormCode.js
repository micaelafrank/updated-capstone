            //  <FormControl>
            //                 <InputLabel htmlFor='my-input' >
            //                     Category
            //                 </InputLabel>
            //                 <FormHelperText id='my-helper-text'
            //                 >
            //                     Select a category to filter size options.
            //                 </FormHelperText>
            //                 <Select
            //                     id="my-input"
            //                     name="category"
            //                     value={category}
            //                     onChange={(e) => setCategory(e.target.value)}
            //                     label="Category"
            //                     placeholder="Category"
            //                 >
            //                     <MenuItem value="mClothing">Men's Clothing</MenuItem>
            //                     <MenuItem value="wClothing">Women's Clothing</MenuItem>
            //                     <MenuItem value="uClothing">Unisex Clothing</MenuItem>
            //                     <MenuItem value="accessories">Accessories</MenuItem>
            //                     <MenuItem value="mShoes">Men's Shoes</MenuItem>
            //                     <MenuItem value="wShoes">Women's Shoes</MenuItem>
            //                     <MenuItem value="furniture">Furniture</MenuItem>
            //                     <MenuItem value="art">Art</MenuItem>
            //                     <MenuItem value="other">Other</MenuItem>
            //                     <MenuItem value="na">N/A</MenuItem>
            //                 </Select>
            //             </FormControl>
            //             <FormControl>
            //                 <InputLabel htmlFor='my-input' >
            //                     Size
            //                 </InputLabel>
            //                 {/* <Select
            //                     id="my-input"
            //                     aria-describedby='my-helper-text'
            //                     name="size"
            //                     value={form.size}
            //                     onChange={updateForm}
            //                 > */}
            //                     {category === "mClothing" ? 
            //                     <Select
            //                         id="my-input"
            //                         aria-describedby='my-helper-text'
            //                         name="size"
            //                         value={form.size}
            //                         onChange={updateForm}
            //                     >
            //                         <MenuItem value="MXS">XS</MenuItem>
            //                         <MenuItem value="MS">S</MenuItem>
            //                         <MenuItem value="MM">M</MenuItem>
            //                         <MenuItem value="ML">L</MenuItem>
            //                         <MenuItem value="MXL">XL</MenuItem>
            //                         <MenuItem value="MXXL">XXL</MenuItem>
            //                         <MenuItem value="MXXXL">XXXL</MenuItem>
            //                         <MenuItem value="M28in">28</MenuItem>
            //                         <MenuItem value="M30in">30</MenuItem>
            //                         <MenuItem value="M32in">32</MenuItem>
            //                         <MenuItem value="M34in">34</MenuItem>
            //                         <MenuItem value="M36in">36</MenuItem>
            //                         <MenuItem value="M38in">38</MenuItem>
            //                         <MenuItem value="M40in">40</MenuItem>
            //                         <MenuItem value="M42in">42</MenuItem>
            //                         <MenuItem value="M44in">44</MenuItem>
            //                     </Select>
            //                     : null}

            //                     {category === "wClothing" ?
            //                     <Select
            //                         id="my-input"
            //                         aria-describedby='my-helper-text'
            //                         name="size"
            //                         value={form.size}
            //                         onChange={updateForm}
            //                     >                                        
            //                             <MenuItem value="WXS">XS</MenuItem>
            //                             <MenuItem value="WS">S</MenuItem>
            //                             <MenuItem value="WM">M</MenuItem>
            //                             <MenuItem value="WL">L</MenuItem>
            //                             <MenuItem value="WXL">XL</MenuItem>
            //                             <MenuItem value="WXXL">XXL</MenuItem>
            //                             <MenuItem value="WXXXL">XXXL</MenuItem>
            //                             <MenuItem value="W24">24</MenuItem>
            //                             <MenuItem value="W25">25</MenuItem>
            //                             <MenuItem value="W26">26</MenuItem>
            //                             <MenuItem value="W27">27</MenuItem>
            //                             <MenuItem value="W28">28</MenuItem>
            //                             <MenuItem value="W29">29</MenuItem>
            //                             <MenuItem value="W30">30</MenuItem>
            //                             <MenuItem value="W32">32</MenuItem>
            //                             <MenuItem value="0">0</MenuItem>
            //                             <MenuItem value="2">2</MenuItem>
            //                             <MenuItem value="4">4</MenuItem>
            //                             <MenuItem value="6">6</MenuItem>
            //                             <MenuItem value="8">8</MenuItem>
            //                             <MenuItem value="10">10</MenuItem>
            //                             <MenuItem value="12">12</MenuItem>
            //                             <MenuItem value="14">14</MenuItem>
            //                             <MenuItem value="16">16</MenuItem>
            //                         </Select>
            //                         : null}
            //                     {category === "uClothing" ?
            //                     <Select
            //                         id="my-input"
            //                         aria-describedby='my-helper-text'
            //                         name="size"
            //                         value={form.size}
            //                         onChange={updateForm}
            //                     >
            //                             <MenuItem value="UXS">XS</MenuItem>
            //                             <MenuItem value="US">S</MenuItem>
            //                             <MenuItem value="UM">M</MenuItem>
            //                             <MenuItem value="UL">L</MenuItem>
            //                             <MenuItem value="UXL">XL</MenuItem>
            //                             <MenuItem value="UXXL">XXL</MenuItem>
            //                             <MenuItem value="UXXXL">XXXL</MenuItem>
            //                             <MenuItem value="U24">24</MenuItem>
            //                             <MenuItem value="U25">25</MenuItem>
            //                             <MenuItem value="U26">26</MenuItem>
            //                             <MenuItem value="U27">27</MenuItem>
            //                             <MenuItem value="U28">28</MenuItem>
            //                             <MenuItem value="U29">29</MenuItem>
            //                             <MenuItem value="U30">30</MenuItem>
            //                             <MenuItem value="U32">32</MenuItem>
            //                             <MenuItem value="U34">34</MenuItem>
            //                             <MenuItem value="U36">36</MenuItem>
            //                             <MenuItem value="U38">38</MenuItem>
            //                             <MenuItem value="0">0</MenuItem>
            //                             <MenuItem value="2">2</MenuItem>
            //                             <MenuItem value="4">4</MenuItem>
            //                             <MenuItem value="6">6</MenuItem>
            //                             <MenuItem value="8">8</MenuItem>
            //                             <MenuItem value="10">10</MenuItem>
            //                             <MenuItem value="12">12</MenuItem>
            //                             <MenuItem value="14">14</MenuItem>
            //                             <MenuItem value="16">16</MenuItem>
            //                         </Select>
            //                         : null}
            //                     {category === "accessories" ?
            //                     <Select
            //                         id="my-input"
            //                         aria-describedby='my-helper-text'
            //                         name="size"
            //                         value={form.size}
            //                         onChange={updateForm}
            //                     >
            //                         <MenuItem value="AS">S</MenuItem>
            //                         <MenuItem value="AM">M</MenuItem>
            //                         <MenuItem value="AL">L</MenuItem>
            //                         <MenuItem value="AOS">One Size</MenuItem>
            //                         </Select>
            //                         : null}
            //                     {category === "wShoes" ?
            //                     <Select
            //                         id="my-input"
            //                         aria-describedby='my-helper-text'
            //                         name="size"
            //                         value={form.size}
            //                         onChange={updateForm}
            //                     >
            //                             <MenuItem value="W5">W5</MenuItem>
            //                             <MenuItem value="W6">W6</MenuItem>
            //                             <MenuItem value="W7">W7</MenuItem>
            //                             <MenuItem value="W8">W8</MenuItem>
            //                             <MenuItem value="W9">W9</MenuItem>
            //                             <MenuItem value="W10">W10</MenuItem>
            //                             <MenuItem value="W11">W11</MenuItem>
            //                         </Select>
            //                         : null}
            //                     {category === "mShoes" ?
            //                     <Select
            //                         id="my-input"
            //                         aria-describedby='my-helper-text'
            //                         name="size"
            //                         value={form.size}
            //                         onChange={updateForm}
            //                     >
            //                             <MenuItem value="M7">M7</MenuItem>
            //                             <MenuItem value="M8">M8</MenuItem>
            //                             <MenuItem value="M9">M9</MenuItem>
            //                             <MenuItem value="M10">M10</MenuItem>
            //                             <MenuItem value="M11">M11</MenuItem>
            //                             <MenuItem value="M12">M12</MenuItem>
            //                             <MenuItem value="M13">M13</MenuItem>
            //                             <MenuItem value="M14">M14</MenuItem>
            //                         </Select>
            //                         : null}
            //                 {(category === "furniture" || "art" || "other") ?
            //                     <Input
            //                         id="my-input"
            //                         aria-describedby='my-helper-text'
            //                         name="size"
            //                         value={form.size}
            //                         onChange={updateForm}
            //                     />
            //                     : null} 
            //             </FormControl>